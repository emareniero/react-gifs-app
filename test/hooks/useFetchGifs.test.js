import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    // Rendericemos nuestro hook, le mandamos la categoria y guardamos el resultado
    const { result } = renderHook(() => useFetchGifs("Tenis"));
    // console.log(result) // vemos que tiene dentro de current el arrelgo de imagenes y el estado del isLoading

    // Desetructuramos el result
    const { images, isLoading } = result.current;

    // Ahora evaluemos que en el estado inical del hook haya cero imagenes
    expect(images.length).toBe(0);

    // Tambien revisemo que isLoading este en true
    expect(isLoading).toBeTruthy();
  });

  test("debe de regresar un arreglo de imágenes y el isLoading en false", async () => {
    // Rendericemos nuestro hook, le mandamos la categoria y guardamos el resultado
    const { result } = renderHook(() => useFetchGifs("Tenis"));

    // Aca vamos a esperar que en el resultado haya imagenes
    await waitFor(
      // Aca evaluamos que haya al menos una imagen, si esto falla puede ser un problema en el backend o algo
      // pero al menos sabemos que no esta llegando imagnes por algun motivo
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    // Desetructuramos el result
    const { images, isLoading } = result.current;

    // Ahora evaluemos que en el estado inical del hook haya cero imagenes
    expect(images.length).toBeGreaterThan(0);

    // Tambien revisemo que isLoading este en true
    expect(isLoading).toBeFalsy()
  });
});
