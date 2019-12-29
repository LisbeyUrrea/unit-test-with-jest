describe("Comprobar cadenas de texto", () => {
    const texto = "un bonito texto"

    test("debe contener el texto 'bonito'", () => {

        expect(texto).toMatch(/bonito/)
    })

    test("no contine el texto 'divino'",() => {
        expect(texto).not.toMatch(/divino/)
    })

    test("El texto debe tener 15 caracteres", () => {
        expect(texto).toHaveLength(15)
    })

})