describe("Comparadores comunes (Objetos)", () => {
 const user = {
     name: 'Lisbey',
     lastName: 'Urrea'
 }
 const user2 = {
    name: 'Lisbey',
    lastName: 'Urrea'
}

const user3 = {
    name: 'Lisbey',
    lastName: 'Urrea Marin'
}

test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
})

test('Desigualdad de elementos', () => {
    expect(user).not.toEqual(user3);
})

})