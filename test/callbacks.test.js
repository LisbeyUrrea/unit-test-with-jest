import {callbackHell} from '../src/callbacks'

describe("Pruebas a callBack",() => {
    test("CallBack",(done) => {
        const otherCallBack = (data) => {
            expect(data).toBe("Hola javascript")
            done()
        }
        callbackHell(otherCallBack)
    })


})