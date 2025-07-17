import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Pruebas en GifGrid', () => { 
    const category = 'Naruto';
    
    test('Debe de mostrar cargando', () => {         
        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        // screen.debug()
        expect( screen.getAllByText('Cargando...'));
        expect( screen.getAllByText(category));

    })
    
    test('Debe mostrar items cuando se cargan las imagenes useFetchGif', () => { 

        const gif = [
            {
            id: '101',
            title: 'Goku',
            url: 'https://www.goku.com'
            },
            {
            id: '200',
            title: 'Naruto',
            url: 'https://www.naruto.com'
            }
        ]

        useFetchGif.mockReturnValue({
            images: gif,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect( screen.getAllByRole('img').length).toBe(2)
        
      })
 })