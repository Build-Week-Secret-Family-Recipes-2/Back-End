const server = require('./server.js');
const request = require('supertest');
const db = require('../database/dbConfig');




describe('GET', () => {

    beforeAll( async () => {
        await db('recipes').truncate();
    })

    
        it('The server is running', () => {
            return request(server).get('/')
                .expect(200)
        });



    describe('/api/recipes', () => {

        it('the user can access it after loggin in', () => {
            return request(server)
            .get('/api/recipes')
            .set('access-token',  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbHZvMjAyMiIsImlhdCI6MTU5MzAyOTQ3NywiZXhwIjoxNTkzMDMzMDc3fQ.AlxeYzakjqBJ5yuaQG5oxmPBguOJTFwgfqADCGSxS6k')
            .expect(200)
        });

        it('should not return an undefined object', () => {
            return request(server)
            .get('/api/recipes')
            .set('access-token',  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbHZvMjAyMiIsImlhdCI6MTU5MzAyOTQ3NywiZXhwIjoxNTkzMDMzMDc3fQ.AlxeYzakjqBJ5yuaQG5oxmPBguOJTFwgfqADCGSxS6k')
            .then( res => {
                expect(res.body).toBeDefined()
            })
           
        });
    });


   

});





