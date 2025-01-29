import app from "../app";
import request from "supertest";

const api = request(app);

describe("GET /employee", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.get("/api/v1/employee").send();
    expect(response.status).toBe(200);
  });
  test("should respond with an object", async () => {
    const response = await api.get("/api/v1/employee").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});


