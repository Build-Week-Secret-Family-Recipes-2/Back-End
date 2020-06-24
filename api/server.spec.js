const server = require('./server.js');
const request = require('supertest');
const { intersect } = require('../database/dbConfig');
const { expectCt } = require('helmet');



describe('GET', () => {
    it('The server is running', () => {
        return request(server).get('/')
            .expect(200)
    });

});