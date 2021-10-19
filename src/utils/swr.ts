/**
 * Default fetcher to use with SWR.
 */
export const fetcher = async (
  ...args: [input: RequestInfo, init?: RequestInit]
) => {
  const res = await fetch(...args);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    // @ts-ignore
    error.info = await res.json();
    // @ts-ignore
    error.status = res.status;

    throw error;
  }

  return res.json();
};
