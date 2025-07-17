import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

// describe('algo', () => {
    
//     test('should ', () => {
//         const onNewCategory = jest.fn()
//         render(<AddCategory onNewCategory={onNewCategory}/>)
//         const input = screen.getByRole('textbox')
//         const submit = screen.getByRole('form')
//         fireEvent.input(input, { target: {value: 'Saitama'} })
//         // screen.debug()
//         fireEvent.submit(submit)
//         expect(onNewCategory).toHaveBeenCalledTimes(0)
        
//     })
// }) 

describe('Pruebas en AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        
        expect(input.value).toBe('Saitama');
    });
    
    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Naruto';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const submit = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(submit);
        
        expect(input.value).toBe('');
        
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    })
    
    test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const submit = screen.getByRole('form');
        fireEvent.submit(submit);

        expect(onNewCategory).toHaveBeenCalledTimes(0);


       })
 })