import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en < GifExpertApp/>", () => {
  test("debe haber al menos una categoría al iniciarse", () => {
    // Creamos una categoría inicial
    const categoriaInicial = "Tenis";

    // Renderizamos el objeto
    render(<GifExpertApp />);

    // screen.debug();
    // Testeamos que al menos haya una categría la iniciar la app
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toContain(categoriaInicial);
  });

  test("el conteiner debe coincidir con el snapshot", () => {
    // Renderizamos el componenete y extraemos el conteiner
    const { container } = render(<GifExpertApp />);

    // Comparamos con el sanpshot
    expect(container).toMatchSnapshot();
  });

});
