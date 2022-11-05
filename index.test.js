const axios = require('axios')

// test('get all', async () => {
//     const response = await axios.get('http://localhost:3003/api/persons')
//     expect(response.status).toBe(200)
// });

test('create happy path', async () => {
    const blog = {
        title: "Foobar blog",
        author: "BarFoo blog",
        url: "http://foo.bar",
        likes: 123
    }
    const response = await axios.post('http://localhost:3003/api/blogs', blog)
    expect(response.status).toBe(201)

    // const personCreated = response.data
    // expect(personCreated.id).not.toBe(0)
    // expect(person).toEqual({ name: personCreated.name, number: personCreated.number });
});
