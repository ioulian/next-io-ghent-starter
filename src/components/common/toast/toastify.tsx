import { createRoot } from "react-dom/client";
import {
  ToastContainer,
  toast,
  ToastContent,
  ToastOptions,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let hasContainer = false;

const setup = () => {
  if (!hasContainer) {
    hasContainer = true;
    const root = createRoot(document.getElementById("root-toastify")!);
    root.render(
      <ToastContainer position="top-right" toastClassName="c-toast" />,
    );
  }
};

export const success = (content: ToastContent, options?: ToastOptions) => {
  setup();
  toast.success(content, options);
};

export const error = (content: ToastContent, options?: ToastOptions) => {
  setup();
  toast.error(content, options);
};
