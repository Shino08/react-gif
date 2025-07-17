describe('Prueba básica', () => {
  test('debería sumar correctamente', () => {
    expect(1 + 1).toBe(2); // Test de ejemplo válido
  });

  test('debería renderizar texto', () => {
    const text = "Hola Jest";
    expect(text).toContain("Jest"); // Usando matchers de @testing-library/jest-dom
  });
});