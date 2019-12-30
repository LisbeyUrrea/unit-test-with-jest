import {getDataFromApi} from '../src/promise'

describe("Probar async/Await", () => {

    test("Realizar una perticion a una api", async ()=>{
        const api = 'https://rickandmortyapi.com/api/character'
        const getRick = 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0)
        })

        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual("Rick Sanchez")
        })
    })

    test("realizando una peticion a un API con error", async() => {
        const apiError = 'https://httpstat.us/404'
        const pericion = getDataFromApi(apiError)
        await expect(pericion).rejects.toEqual(Error("Request failed with status code 404"))
    })

    test("Resuelve un hola",  async() => {
        await expect(Promise.resolve("Hola")).resolves.toBe("Hola")
        await expect(Promise.reject("Error")).rejects.toBe("Error")
    })

})