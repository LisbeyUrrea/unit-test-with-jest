import {getDataFromApi} from '../src/promise'

describe("Probando promesas", () => {

    test("Peticion a API", (done) => {
        const url = 'https://rickandmortyapi.com/api/character'
        getDataFromApi(url).then(data => {
            const response= data.results.length
            expect(response).toBeGreaterThan(0) 
            done()
        })

    })
}) 