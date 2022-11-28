import merge from "lodash/merge";
import { useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";

import { ApiError } from "../@types/error";
import { AppStore } from "../store/store";

import { API_REQUEST_STATUS, getAuthFetcher } from "./api.service";
import { NotFoundError, RequireResult } from "./serverSideProps.service";

export type QueryType = {
  [key: string]: string | string[] | undefined;
};

export interface ListReturn<T> {
  totalItems: number;
  items: T[];
  itemsPerPage: number;
  currentPage: number;
  pageCount: number;
}

export const getApiEndpointForIRI = (IRI: string, query?: QueryType) => {
  let queryParams = "";
  if (query) {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (typeof value === "string") {
        params.append(key, value);
      }

      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(`${key}[]`, item);
        });
      }
    });
    queryParams = `?${params.toString()}`;
  }

  return `${process.env.NEXT_PUBLIC_API_DOMAIN}/api${IRI}${queryParams}`;
};

export const generateEntitiesHook =
  <View>(IRI: string) =>
  (query: QueryType = { pagination: "false" }, shouldFetch: boolean = true) => {
    const API = getApiEndpointForIRI(IRI, query);
    const { data, error, mutate } = useSWR<ListReturn<View>>(
      shouldFetch ? API : null
    );

    return {
      mutate,
      data,
      error,
      isLoading: shouldFetch && !data && !error,
    };
  };

export const generateEntityHook =
  <View>(IRI: string) =>
  (id?: string, query?: QueryType) => {
    const API = getApiEndpointForIRI(`${IRI}/${id}`, query);
    const { data, error, mutate } = useSWR<View>(id ? API : null);

    return {
      mutate,
      data,
      error,
      isLoading: !data && !error,
    };
  };

export const generateEntityPatchHook =
  <View, Dto>(IRI: string) =>
  (id?: string) => {
    const [status, setStatus] = useState<API_REQUEST_STATUS>("idle");
    const [error, setError] = useState<ApiError>();
    const API = getApiEndpointForIRI(`${IRI}/${id}`);
    const fetcher = useSWRConfig().fetcher as ReturnType<
      typeof getAuthFetcher<View>
    >;

    return {
      error,
      status,
      patch: (
        body: Partial<Dto>,
        updateList: boolean = false,
        query?: QueryType
      ) =>
        new Promise<View>((resolve, reject) => {
          if (id) {
            setError(undefined);
            setStatus("loading");
            if (status !== "loading") {
              fetcher(API, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/merge-patch+json",
                },
                body: JSON.stringify(body),
              })
                .then((res) => {
                  if (updateList) {
                    mutate(getApiEndpointForIRI(IRI, query));
                  }
                  mutate(API);
                  setStatus("succeeded");
                  resolve(res as View);
                })
                .catch((e) => {
                  setError(e);
                  setStatus("failed");
                  reject(e);
                });
            }
          }
        }),
    };
  };

export const generateEntityPostHook =
  <View, Dto>(IRI: string) =>
  () => {
    const [status, setStatus] = useState<API_REQUEST_STATUS>("idle");
    const [error, setError] = useState<ApiError>();
    const [item, setItem] = useState<View>();
    const API = getApiEndpointForIRI(IRI);
    const fetcher = useSWRConfig().fetcher as ReturnType<
      typeof getAuthFetcher<View>
    >;

    return {
      error,
      status,
      item,
      post: (body: Dto, updateList: boolean = false, query?: QueryType) =>
        new Promise<View>((resolve, reject) => {
          setError(undefined);
          setStatus("loading");
          if (status !== "loading") {
            fetcher(API, {
              method: "POST",
              body: JSON.stringify(body),
            })
              .then((res) => {
                if (updateList) {
                  mutate(getApiEndpointForIRI(IRI, query));
                }
                setStatus("succeeded");
                setItem(res as View);
                resolve(res as View);
              })
              .catch((e) => {
                setError(e);
                setStatus("failed");
                reject(e);
              });
          }
        }),
    };
  };

export const generateEntityDeleteHook = (IRI: string) => () => {
  const [status, setStatus] = useState<API_REQUEST_STATUS>("idle");
  const [error, setError] = useState<ApiError>();
  const API = getApiEndpointForIRI(IRI);
  const fetcher = useSWRConfig().fetcher as ReturnType<typeof getAuthFetcher>;

  return {
    error,
    status,
    // As "delete" is a reserved keyword, we use "deleteItem"
    deleteItem: (id: string, updateList: boolean = false, query?: QueryType) =>
      new Promise<true>((resolve, reject) => {
        setError(undefined);
        setStatus("loading");

        if (status !== "loading") {
          fetcher(`${API}/${id}`, {
            method: "DELETE",
          })
            .then(() => {
              if (updateList) {
                mutate(getApiEndpointForIRI(IRI, query));
              }
              setStatus("succeeded");
              resolve(true);
            })
            .catch((e) => {
              setError(e);
              setStatus("failed");
              reject(e);
            });
        }
      }),
  };
};

export const generateEntitiesPrecache =
  <View>(IRI: string) =>
  async (
    store: AppStore,
    query: QueryType = { pagination: "false" }
  ): Promise<{
    [key: string]: ListReturn<View> | null;
  }> => {
    const API = getApiEndpointForIRI(IRI, query);
    return {
      [API]:
        ((await getAuthFetcher(store)(API).catch(
          () => {}
        )) as ListReturn<View>) ?? null,
    };
  };

export const generateEntityPrecache =
  <View>(IRI: string) =>
  async (
    store: AppStore,
    id?: string,
    query?: QueryType
  ): Promise<{
    [key: string]: View | null;
  }> => {
    const API = getApiEndpointForIRI(`${IRI}/${id}`, query);
    if (!id) {
      throw new NotFoundError();
    }

    return {
      [API]:
        ((await getAuthFetcher(store)(API).catch(() => {})) as View) ?? null,
    };
  };

export const requireEntities =
  <View>(fn: ReturnType<typeof generateEntitiesPrecache<View>>) =>
  (...args: Parameters<ReturnType<typeof generateEntitiesPrecache<View>>>) =>
  ({ result }: RequireResult) =>
    new Promise<RequireResult<ListReturn<View> | null>>((resolve, reject) => {
      fn(...args)
        .then((precache) => {
          const hasResponse = Object.keys(precache).length !== 0;

          if (hasResponse) {
            const [, items] = Object.entries(precache)[0];
            resolve({
              result: merge(result, {
                props: {
                  fallback: {
                    ...precache,
                  },
                },
              }),
              response: items,
            });
            return;
          }

          reject(new NotFoundError());
        })
        .catch(() => {
          reject(new NotFoundError());
        });
    });

export const requireEntity =
  <View>(fn: ReturnType<typeof generateEntityPrecache<View>>) =>
  (...args: Parameters<ReturnType<typeof generateEntityPrecache<View>>>) =>
  ({ result }: RequireResult) =>
    new Promise<RequireResult<View | null>>((resolve, reject) => {
      fn(...args)
        .then((precache) => {
          const hasResponse = Object.keys(precache).length !== 0;

          if (hasResponse) {
            const [, item] = Object.entries(precache)[0];

            if (item) {
              resolve({
                result: merge(result, {
                  props: {
                    fallback: {
                      ...precache,
                    },
                  },
                }),
                response: item,
              });
              return;
            }
          }

          reject(new NotFoundError());
        })
        .catch(() => {
          reject(new NotFoundError());
        });
    });
