import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Resale Market`;
  }, [title]);
};

export default useTitle;
