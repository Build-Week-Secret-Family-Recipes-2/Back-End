const server = require('./server.js');
const request = require('supertest');




describe('GET', () => {

    
        it('The server is running', () => {
            return request(server).get('/')
                .expect(200)
        });



    describe('/api/recipes', () => {

        it('The server is running', () => {
            return request(server)
            .get('/api/recipes')
            .set('access-token',  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbHZvMjAyMiIsImlhdCI6MTU5MzAyOTQ3NywiZXhwIjoxNTkzMDMzMDc3fQ.AlxeYzakjqBJ5yuaQG5oxmPBguOJTFwgfqADCGSxS6k')
            .expect(200)
        });
    });


});





