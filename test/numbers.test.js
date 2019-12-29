import {  suma } from '../src/numbers'

describe('Comparar Numeros', () => {

    test('Mayor que', () => {
        const numeroUno = 2;
        const numeroDos = 2;

        const resultado = suma(numeroUno ,     numeroDos)

        expect(resultado).toBeGreaterThan(3);
    })

    test('Mayor O Igual que', () => {
        const numeroUno = 2;
        const numeroDos = 2;

        const resultado = suma(numeroUno ,     numeroDos)

        expect(resultado).toBeGreaterThanOrEqual(4);
    })

    test('Menor que', () => {
        const numeroUno = 2;
        const numeroDos = 2;

        const resultado = suma(numeroUno ,     numeroDos)

        expect(resultado).toBeLessThan(10);
    })

    test('Menor O Igual que', () => {
        const numeroUno = 3;
        const numeroDos = 3;

        const resultado = suma(numeroUno ,     numeroDos)

        expect(resultado).toBeLessThanOrEqual(6);
    })

    test('Numeros Decimales', () => {
        const numeroUno = 2.5;
        const numeroDos = 3;

        const resultado = suma(numeroUno , numeroDos)

        expect(resultado).toBeCloseTo(5.5);
    })

});