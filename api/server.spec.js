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
            .set('access-token',  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbHZvMjAyMCIsImlhdCI6MTU5MzExOTA1OCwiZXhwIjoxNTkzMTIyNjU4fQ.mlOK7wlSa_zD0s25fOdDuMVBR4fM9lb-rGT6okE0Tjc')
            .expect(200)
        });

        it('should not return an undefined object', () => {
            return request(server)
            .get('/api/recipes')
            .set('access-token',  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbHZvMjAyMCIsImlhdCI6MTU5MzExOTA1OCwiZXhwIjoxNTkzMTIyNjU4fQ.mlOK7wlSa_zD0s25fOdDuMVBR4fM9lb-rGT6okE0Tjc')
            .then( res => {
                expect(res.body).toBeDefined()
            })
           
        });
    });


   

});





