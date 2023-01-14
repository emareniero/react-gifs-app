import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (ev) => {
    // desestructuramos value del evento!
    const { value } = ev.target;
    // Lo agregamos para que react se entere y cambie el estado
    setInputValue(value);
  };

  const onEventSubmit = (ev) => {
    // Evitamos que se vuelva a cargar toda la pagina
    ev.preventDefault();

    // Chequeamos que no se envien espacios vacios
    if (inputValue.trim().length <= 1) return;

    // Como ahora recibimos la funcion setCateogries
    // le agregamos el valor que estamos tipeadndo
    onNewCategory( inputValue.trim() );
    // Limpiamos form
    setInputValue('');
  };

  return (
    <form onSubmit={onEventSubmit}>
      <input 
        type="text" 
        placeholder="Buscar Gifs!" 
        value={ inputValue }
        onChange={ onInputChange } />
    </form>
  );
};
