import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {

  test("debe de cambiar el valor en la caja de texto", () => {
    // Renderizamos el objeto de pruebas con sus props
    render(<AddCategory onNewCategory={() => {}} />);

    // Buscamos el input en nuestro jsx
    const input = screen.getByRole("textbox"); // Se busca como textbox en lugar de input

    // Ahora vamos a simular ocmo is una persona escribiera en el input la palabra Tenis
    fireEvent.input(input, { target: { value: "Tenis" } });
    // screen.debug();

    // Ahora hacemos el test
    expect(input.value).toBe("Tenis");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {

    // priemos establecemos las condiciones iniciales
    const inputValue = 'Tenis';
    const onNewCategory = jest.fn();

    // Renderizamos el objeto de pruebas con sus props
    render(<AddCategory onNewCategory={ onNewCategory } />);

    // Buscamos el input en nuestro jsx
    const input = screen.getByRole("textbox"); // Se busca como textbox en lugar de input
    const form = screen.getByRole("form"); // Se busca el fomulario par amandar el submit  tuve que agregar un aria-label="form" para que ande

    // Ahora vamos a simular como si una persona escribiera en el input la palabra Tenis
    fireEvent.input(input, { target: { value: inputValue } });

    // Ahora disparamos el formulario
    fireEvent.submit( form ); // Puedo poner un console.log('..') en el metodo que ejecuta onSubmit para saber si realmente se esta disparando

    // Ahora testeamos que el input se vacíe porque hay que recordar qeu cuando aprentamos enter para buscar un gif se tiene que vaciar
    expect( input.value ).toBe( '' );

    //Ahora evaluamos que la función haya sido llamada
    expect( onNewCategory ).toHaveBeenCalled(); 

    // Ademas chequeamos que solo haya sido llamada una vez
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    // Ahora revisamos tambien que haya sido llamada con el valor del input value
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  })

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {

    // priemos establecemos las condiciones iniciales
    const onNewCategory = jest.fn();

    // Renderizamos el objeto de pruebas con sus props
    render(<AddCategory onNewCategory={ onNewCategory } />);

    // Buscamos el input en nuestro jsx
    const form = screen.getByRole("form"); // Se busca el fomulario par amandar el submit  tuve que agregar un aria-label="form" para que ande

    // Ahora disparamos el formulario
    fireEvent.submit( form ); // Puedo poner un console.log('..') en el metodo que ejecuta onSubmit para saber si realmente se esta disparando

    // Esperamos que el onNewCategory no haya sido llamado
    expect( onNewCategory ).not.toHaveBeenCalled();

  })

});
