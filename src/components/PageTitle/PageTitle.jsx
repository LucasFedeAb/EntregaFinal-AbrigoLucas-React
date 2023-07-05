import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title; // Actualiza el título de la pestaña

    // Limpia el título de la pestaña cuando el componente se desmonta
    return () => {
      document.title; // Título original
    };
  }, [title]);

  return null; // No renderiza ningún contenido adicional
};

export default PageTitle;
