import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Ahora vamos a simular mi función de useFetchGifs con un mock
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrdid/>", () => {
  // Creamos una constante con la categoría porque la vamos a usar varias veces
  const category = "Tenis";

  test("debe de mostrar el loading inicialmente", () => {
    // Desestructuramos el objeto tal cual lo hace originalmente
    // sabemos que cuando la app se abre por primera vez images viene vacia y isLoading en false
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // Renderizamos el sujeto de pruebas
    render(<GifGrid category={category} />);
    // screen.debug();

    // Verificamos que este cargando inicialmente
    expect(screen.getByText("Cargando...")).toBeTruthy();

    // También deberíamos verificar que tenga la categoría
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("debe de mostrar imagenes cuando se llama al useFetchGifs()", () => {
    // Suponemos que este es el arrgelo de imagene sque me esta deolviendo mi mock
    const gifs = [
      {
        id: "ABC",
        title: "Tenis",
        img: "https://....",
      },
      {
        id: "DEF",
        title: "Basquet",
        img: "https://....",
      },
    ];

    // sabemos que si ya cargo deberíamos tener al menos una categoría y el estado en false de isLoading
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    // Renderizamos el sujeto de pruebas
    render(<GifGrid category={category} />);
    // screen.debug();

    // Ahora esperamos que al menos haya dos imagenes renderizadas
    expect( screen.getAllByRole('img').length ).toBe(2)

  });
});
