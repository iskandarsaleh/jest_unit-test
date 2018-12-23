const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
//nottoBe
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
//toEqual
test('User Should be Atenk Pemmy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Atenk',
        lastName: 'Pemmy'
    });
});
//less than or greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700; 
    expect(load1 + load2).toBeLessThan(1600); 
});
//regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

//Arrays
test('admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']; 
    expect(usernames).toContain('admin');
}); 


//async wait
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1); 
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
});

