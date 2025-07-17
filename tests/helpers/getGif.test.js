import { getGif } from "../../src/helpers/getGif"

describe('Prueba en getGif', () => {

    test('Debe de retornar un arreglo de gif', async () => { 
        const gifs = await getGif('Naruto');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })