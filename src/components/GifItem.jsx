// Importamos el prop-types
import PropTypes from 'prop-types';


export const GifItem = ({ title, img }) => {

  return (
    <div className="card">

        <img src={img} alt={title} />
        <p> {title} </p>

    </div>
  )
}

// Ponemos las características que tienen que tener las prop types.
GifItem.propTypes = {

  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired

}