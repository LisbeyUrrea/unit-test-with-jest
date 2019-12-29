import {suma,resta, multiplicacion, division} from '../src/maths'

describe('Calculos matematicos',() => {

    test
    ('Prueba de suma',()=>{
        // variables
        const numeroUno = 2;
        const numeroDos = 2;

        //llamada al metodo
        const respuesta = suma(numeroUno,numeroDos);
        //ejecucion prueba

        expect(respuesta).toBe(4);
    });

    test
    ('Prueba de resta',()=>{
        // variables
        const numeroUno = 4;
        const numeroDos = 2;

        //llamada al metodo
        const respuesta = resta(numeroUno,numeroDos);
        //ejecucion prueba
        
        expect(respuesta).toBe(2);
    });

    test
    ('Prueba de multiplocacion',()=>{
        // variables
        const numeroUno = 4;
        const numeroDos = 2;

        //llamada al metodo
        const respuesta = multiplicacion(numeroUno,numeroDos);
        //ejecucion prueba
        
        expect(respuesta).toBe(8);
    });

    test
    ('Prueba de resta',()=>{
        // variables
        const numeroUno = 10;
        const numeroDos = 2;

        //llamada al metodo
        const respuesta = division(numeroUno,numeroDos);
        //ejecucion prueba
        
        expect(respuesta).toBe(5);
    });

});