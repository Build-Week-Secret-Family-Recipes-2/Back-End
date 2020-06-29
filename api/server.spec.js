const server = require('./server.js');
const request = require('supertest');
const db = require('../database/dbConfig');
const bcrypt= require('bcryptjs');
const jsonwebtoken = require("jsonwebtoken");
const Recipes = require('../recipies/recipe-model.js');
const Users = require('../users/users-model.js');

//lets define token here so that it is accesible to entire testing
let auth = {};


describe('GET', () => {

    it('The server is running', () => {
        return request(server).get('/')
            .expect(200)
    });


    //Before any of the tests run
    beforeAll( async () => {

        await db('recipes').truncate();
        await db('users').truncate();
        const hash = bcrypt.hashSync('testing', 10);
        Users.insert({
            username: "testing",
            password: hash,
            email: "kev@gmail.com",
	        firstname: "kevin",
	        lastname: "silvestre"

        })
    });

    beforeEach( async() => {
            const response = await request(server)
                .post('/api/auth/login')
                .send({
                    username: "testing",
                    password: "testing"
                })

                auth.token = response.body.token;
    });

    
    describe('/api/recipes', () => {

        it('the user can access it after loggin in',  async () => {
                const response = await  request(server)
                    .get('/api/recipes')
                    .set('authorization', auth.token)
                    .expect(200)
        });

    
        it('should not return an undefined object',  async () => {
            const response = await request(server)
            .get('/api/recipes')
            .set('authorization', auth.token)
            .then( res => {
                expect(res.body).toBeDefined()
            })
           
        });

        it('should return a type of object',  async () => {
            const response = await request(server)
            .get('/api/recipes')
            .set('authorization', auth.token)
            .then( res => {
                expect(res.type).toEqual('application/json')
            })
           
        });

    });

});


        

  




    

   


