import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  // creamos un useState para mantener el estado de la app
  const [images, setImages] = useState([]);

  // definmos un useState para ver si esta cargando o no
  const [isLoading, setIsLoading] = useState(true);

  // creamos una funcion para tomar los gifs
  const getImages = async () => {
    // Mandamos la categoría al fecth helper para buscar el gifs
    const newGifs = await getGifs(category);
    // rescibimos los gifs y los guardamos en imagenes
    setImages(newGifs);
    // avisamos que ya no estamos cargando los gifs
    setIsLoading(false)

  };

  // Usamos el useEffect de react
  useEffect(() => {
    // Llamamos el método ni bien se crea la función
    getImages();
  }, []);

  // devolvemos las imagenes y el estado
  return {
    images,
    isLoading,
  };
};
