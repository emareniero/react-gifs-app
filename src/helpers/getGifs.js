// vamos a crear una función para traer los gifs
export const getGifs = async (category) => {
    // creamos el url
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BHwX7GQNZ4kNqMBH4rmxIbUModYIUMyG&q=${category}&limit=10`;
  
    // hacemos la petición
    const resp = await fetch(url);
  
    // apartamos la data de la respuesta
    const { data } = await resp.json();
  
    // Ahora extrameos el gif con la imagen, el id y su título de la data y lo pasamos a un objeto
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      img: gif.images.downsized_medium.url,
    }));
  
    // Retornamos los gifs
    return gifs;
  };