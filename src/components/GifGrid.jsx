import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  // desestructuramos las images y isLoading de nuestri fetch
  const { images, isLoading } = useFetchGifs(category);

  // devolvemos la respuesta del componente
  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
