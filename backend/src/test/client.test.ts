import app from '../app'
import request from 'supertest'

const api = request(app)

describe("GET /client",()=>{
    test("should respond with a 200 status code",async()=>{
        const response = await api.get("/api/v1/client").send()
        expect(response.statusCode).toBe(200)
    })
    test("should respond with an object", async () => {
        const response = await request(app).get("/api/v1/client").send();
        expect(response.body).toBeInstanceOf(Object);
      });
})
describe("POST /client",()=>{
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/api/v1/client").send({
        "client_name": "test name",
        "address": "test address",
        "client_ci": 95050123407,
        "frecuency": true,
        "ocupation": "test ocupation",
        "client_genre": "male",
        "order": "test order"
        });
        expect(response.statusCode).toBe(200);
      });
})