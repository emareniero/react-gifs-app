import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test al componente <GifItem/>", () => {
  // Creamos algunas instancias para mandarle a nuestro componente
  const title = "Goku";
  const url = "https://www.goku.com/images";

  test("debe hacer match con el Snapshot", () => {
    // Tomamos el container del componente para tomarle una imagen
    const { container } = render(<GifItem title={title} img={url} />);

    // Sacamos una foto para que si luego el componente cambia nos avise
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imágen con el URL(img) y el ALT indicado", () => {
    // Renderizamos el componente que queremos testear
    render(<GifItem title={title} img={url} />);

    // Si queremos ver que estamos renderizando hacemos uso de screen.debug()
    // screen.debug();

    // Chequeamos que la imagen que esta mandando sea exacamente la que nosotros queremos
    // expect( screen.getByRole( 'img' ).src ).toBe( url )
    // console.log(screen.getByRole( 'img' ))

    // Para hacer mas simple el codigo podemos desestructrar lo que queremos testear
    const { src, alt } = screen.getByRole("img");

    // Testeamos que venga título e imágen
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostrar el título en el componente", () => {
    // Renderizamos el componente que queremos testear
    render(<GifItem title={title} img={url} />);

    // Chequeamos que venga el titulo
    expect(screen.getByText(title)).toBeTruthy();
  });
});
