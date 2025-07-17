# Guia para la configuracion del Test

📌 1. Instalar dependencias necesarias
Ejecuta estos comandos en tu terminal (asegúrate de estar en la raíz del proyecto):

bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom
npm install --save-dev whatwg-fetch identity-obj-proxy

📌 2. Configurar Babel (babel.config.js)
Crea un archivo babel.config.js en la raíz del proyecto con:

export default {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }], // JSX moderno
  ],
};


📌 3. Configurar Jest (jest.config.js)
Crea un archivo jest.config.js en la raíz:

export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'], // usar setupFilesAfterEnv, no setupFiles
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {},
};

📌 4. Configuración adicional (jest.setup.js)
Crea un archivo jest.setup.js para configurar globales (como @testing-library/jest-dom):

javascript
import 'whatwg-fetch'; // Polyfill para fetch

📌 5. Actualizar package.json
Añade estos scripts en tu package.json:

json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watchAll "
}

📌 6. Ejecutar las pruebas
Ejecutar una vez:

bash
npm test
Modo watch (ejecuta pruebas al guardar cambios):

bash
npm run test:watch

📌 7. Crea un test básico funcional

Pega el contenido en demo.test.js con esto:

describe('Prueba básica', () => {
  test('debería sumar correctamente', () => {
    expect(1 + 1).toBe(2);
  });

  test('debería contener un texto', () => {
    const mensaje = "Hola Jest";
    expect(mensaje).toContain("Jest");
  });
});


📌 Para probar con Snapshot
 Instala las dependencias necesarias (si no lo has hecho):
bash
npm install --save-dev react-test-renderer

Ejemplo: 

import renderer from 'react-test-renderer';
import MyComponent from '../MyComponent';

test('snapshot básico', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
