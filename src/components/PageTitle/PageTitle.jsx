import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title;
    };
  }, [title]);

  return null;
};

export default PageTitle;
