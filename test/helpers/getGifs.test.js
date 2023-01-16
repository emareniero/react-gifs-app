import { getGifs } from "../../src/helpers/getGifs"

describe('Test al componente getGifs()', () => {

    test('debe devolver un arreglo de gifs', async ()=> {

        // Le mandemos a nuestra un función una categoría o dos para probar
        const gifs = await getGifs( 'Tenis' );
        // Vemos que nos devuelve
        // console.log(gifs)

        // Evaluamos que el largo de gifs sea al menos mayor que cero 
        expect( gifs.length ).toBeGreaterThan( 0 )

        // Ahora chequeamos que efectivamente el arreglo de objetos sea un objeto como tal
        // y analizamos por lo menos el primero
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            img: expect.any( String ),
          })


    })

})