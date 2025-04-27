const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const fs = require('fs');
const path = require('path');
const faker = require('@faker-js/faker');
require('dotenv').config({path:__dirname+'/./../.env'});
const base_url = process.env.API_BASE_URL;
const header = require('./../data/header-data.json');
const body = require('./../data/body-data.json');

describe('E2E Automation API Restfull Booker', function() {
    this.timeout(10000);

    it('Generate Token', async() => {
        const credential_data = {
            "username": process.env.API_USERNAME,
            "password": process.env.API_PASSWORD
        }
        const res = await request(base_url).post('/auth').send(credential_data).set(header);
        expect(res.status).to.equal(200)
        const newToken = res.body.token;

        const envPath = path.resolve(__dirname, './../.env');
        let envContent = fs.readFileSync(envPath, 'utf8');

        // Ganti baris API_AUTH_TOKEN dengan token baru
        const newEnvContent = envContent.replace(/API_AUTH_TOKEN=.*/, `API_AUTH_TOKEN=${newToken}`);
        fs.writeFileSync(envPath, newEnvContent, 'utf8');
    });

    it('Create Booking', async() => {
        const res = await request(base_url).post('/booking').send().set(header)
        
    })

    it('Get All Bookings Data', async() => {
        const res = await request(base_url).get('/booking');
        expect(res.status).to.equal(200);

    });
})