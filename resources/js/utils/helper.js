import * as Yup from "yup";
import toast from "react-hot-toast";

export const handleErrorApi = (error, options = { duration: 3000 }) => {
  if (typeof error === "object") {
    return toast.error(error.message, options);
  }
  toast.error(error, options);
};

export const handleError = (error, setError) => {
  if (error instanceof Yup.ValidationError) {
    const formattedErrors = error.inner.reduce((acc, err) => {
      acc[err.path] = err.message;
      return acc;
    }, {});
    if (typeof setError === "function") {
      setError(formattedErrors);
    }
    return formattedErrors;
  } else {
    return handleErrorApi(error);
  }
};

export const handleSucess = (msg) => {
  toast.success(msg);
};

export const truncateContent = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + " Read more..";
};
