//Antes de casa prueba
beforeEach(() => console.log("Antes de cada prueba"))
beforeAll(() => console.log("Antes de todas las pruebas"))

describe("Ciclo de vida de un test",() => {
    test("Debe ser True", () => {
        expect(true).toBeTruthy()
    })

    test("Debe ser no debe ser true", () => {
        expect(false).not.toBeTruthy()
    })
})


//Despues de las pruebas
afterEach(() => console.log("Despues de cada prueba"))
afterAll(() => console.log("Despues de todas las pruebas"))

