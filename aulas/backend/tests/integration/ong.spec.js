const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to cerate a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@email.com",
                whatsapp: "1234567890",
                city: "Rio do sul",
                uf: "SC"
        });

        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});
