/**
 * If you want named chunks, use: import(webpackChunkName: "toastify" ...)
 */
const toastify = () => import("./toastify");

export const success = (content: string | JSX.Element) => {
  return toastify().then((toast) => {
    toast.success(content);
  });
};

export const error = (content: string | JSX.Element) => {
  return toastify().then((toast) => {
    toast.error(content);
  });
};
