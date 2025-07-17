import { render } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';

describe('GifItem', () => {

    const title = 'Naruto';
    const url = 'https://Naruto-Uzumaki.com/NU.jpg';

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={ title} url={url} />)
        expect(container).toMatchSnapshot();
     })
});