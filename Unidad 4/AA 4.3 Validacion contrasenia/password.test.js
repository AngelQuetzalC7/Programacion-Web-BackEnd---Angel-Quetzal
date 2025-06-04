const { validContra } = require('./password');

describe('Validación de contraseñas', () => {
    // Casos válidos
    test('Contraseña válida: "Playa2010@"', () => {
        expect(validContra("Playa2010@")).toBe(true);
    });

    // Casos inválidos
    test('Falta carácter especial: "Playa2010"', () => {
        expect(validContra("Playa2010")).toBe(false);
    });

    test('Contraseña corta: "Aq@"', () => {
        expect(validContra("Aq@")).toBe(false);
    });

    // Casos extremos/frontera
    test('Longitud exacta (8): "Aq@m2002"', () => {
        expect(validContra("Aq@m2023")).toBe(true);
    });

    test('Espacios en blanco: "Aq@ m2002"', () => {
        expect(validContra("Aq@ m2002")).toBe(false);
    });

    // Casos vacíos/erróneos
    test('Entrada vacía: ""', () => {
        expect(validContra("")).toBe(false);
    });

    test('Entrada no string (número): 12345678', () => {
        expect(validContra(12345678)).toBe(NaN);
    });

    // Coerción de tipo
    test('Entrada como booleano: true', () => {
        expect(validContra(true)).toBe(NaN);
    });

    // Palabra significativa faltante
    test('Sin palabra significativa: "C7@AGQC"', () => {
        expect(validContra("C7@AGQC")).toBe(false);
    });

    // Caracteres especiales no permitidos
    test('Carácter especial inválido: "C7@m2002?"', () => {
        expect(validContra("C7@m2002?")).toBe(false);
    });
});