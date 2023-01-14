import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifEpertApp = () => {
  // Vamos a definir un hook para controlar el estado de las categorías
  const [categories, setCategories] = useState(["One Punch"]);

  //   console.log(categories);

  // Metodo cuando hacemos click
  const onAddCategory = (event) => {
    // revisamos si la categoriía que recibimos en el evento ya existe, si ya existe, no hay nada que agergar
    if (categories.includes(event)) return;

    // vemos el evento en la ocnsola solo p chequera
    console.log(event);

    // Agregamos nueva categoria al arrelgo
    setCategories([event, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifEpertApp</h1>

      {/* Input par abuscar gif */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de Gits */}
      {categories.map((categorie) => (
        <GifGrid key={categorie} category={categorie} />
      ))}
    </>
  );
};
