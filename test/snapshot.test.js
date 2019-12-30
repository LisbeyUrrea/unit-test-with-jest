import { getCharacter } from '../src/snapshot'
import rick from '../src/json/rick.json'

describe('SnapShop - Instantanesas', () => {

    test('primer SnapShop ', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })

    test('varias exepciones ', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }

        expect(user).toMatchSnapshot({ createAt: expect.any(Date), id: expect.any(Number) })
    })

    test('Exepsion de codigo', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Lisbey Urrea"
        }
        expect(user).toMatchSnapshot({ id: expect.any(Number) })
    })
})