import { useCallback, useEffect, useRef, useState } from "react";

import { ApiError } from "@/types/error";

import { API_REQUEST_STATUS } from "./api.service";

// https://stackoverflow.com/questions/35711724/upload-progress-indicators-for-fetch
export const useFileUpload = (url: string) => {
  const [uploadBytes, setUploadBytes] = useState<number>(0);
  const [uploadBytesTotal, setUploadBytesTotal] = useState<number>(0);
  const [downloadBytes, setDownloadBytes] = useState<number>(0);
  const [downloadBytesTotal, setDownloadBytesTotal] = useState<number>(0);
  const [status, setStatus] = useState<API_REQUEST_STATUS>("idle");
  const [error, setError] = useState<ApiError>();
  const xhr = useRef<XMLHttpRequest>();

  const upload = useCallback(
    <View>(file: File) => {
      xhr.current = new XMLHttpRequest();
      const formdata = new FormData();
      formdata.append("file", file);
      setStatus("loading");
      return new Promise<View>((resolve, reject) => {
        if (xhr.current) {
          xhr.current.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              setUploadBytes(event.loaded);
              setUploadBytesTotal(event.total);
            }
          });
          xhr.current.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              setDownloadBytes(event.loaded);
              setDownloadBytesTotal(event.total);
            }
          });
          xhr.current.addEventListener("load", () => {
            if (xhr.current) {
              const success =
                xhr.current.readyState === 4 &&
                xhr.current.status >= 200 &&
                xhr.current.status <= 299;
              if (success) {
                setStatus("succeeded");
                resolve(JSON.parse(xhr.current.response) as View);
              } else {
                setStatus("failed");
                setError(JSON.parse(xhr.current.response));
                reject(new Error());
              }
            }
          });
          xhr.current.addEventListener("error", () => {
            setStatus("failed");
            reject(new Error());
          });
          xhr.current.addEventListener("abort", () => {
            setStatus("idle");
            reject(new Error("Aborted"));
            setError(undefined);
          });

          setError(undefined);
          xhr.current.open("PUT", url, true);
          xhr.current.setRequestHeader(
            "Content-Type",
            "application/octet-stream",
          );
          xhr.current.send(formdata);
        }
      });
    },
    [url],
  );

  const abort = useCallback(() => {
    xhr.current?.abort();
  }, [xhr]);

  useEffect(() => {
    return () => {
      abort();
    };
  }, [abort]);

  return {
    error,
    uploadBytes,
    uploadBytesTotal,
    uploadProgress: uploadBytesTotal === 0 ? 0 : uploadBytes / uploadBytesTotal,
    downloadBytes,
    downloadBytesTotal,
    downloadProgress:
      downloadBytesTotal === 0 ? 0 : downloadBytes / downloadBytesTotal,
    status,
    upload,
    abort,
  };
};
