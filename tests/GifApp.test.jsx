import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('Pruebas en GifApp', () => { 
    test('Verificar que el formulario y el input existan ', () => { 
        
        render(<GifApp/>);
        screen.debug();
        const form = screen.getAllByRole('form');
        const input = screen.getAllByRole('textbox');

        expect(form).toBeTruthy();
        expect(input).toBeTruthy();

     });
 })