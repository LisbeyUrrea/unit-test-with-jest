import {isNull, isTrue, isFalse, isUndefined} from '../src/booleanos'

describe('Comparar booleanos',() => {

    test('Probar nulos',()=>{
        expect(isNull()).toBeNull();
    })

    test('Probar No es nulos',()=>{
        expect(isUndefined()).not.toBeNull();
    })

    test('Probar true',()=>{
        expect(isTrue()).toBeTruthy();
    })

    test('Probar que no es true',()=>{
        expect(isFalse()).not.toBeTruthy();
    })

    test('Probar falso',()=>{
        expect(isFalse()).toBeFalsy();
    })

    test('Probar que no es falso',()=>{
        expect(isTrue()).not.toBeFalsy();
    })

    test('Probar undefined',()=>{
        expect(isUndefined()).toBeUndefined();
    })

    test('Probar que no es undefined',()=>{
        expect(isNull()).not.toBeUndefined();
    })

})