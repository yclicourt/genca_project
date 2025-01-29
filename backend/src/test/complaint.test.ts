import app from "../app";
import request from "supertest";

const api = request(app);

describe("GET /complaint", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.get("/api/v1/complaint").send();
    expect(response.status).toBe(200);
  });
  test("should return a one complaint", async () => {
    let id =111
    return api
      .get(`/api/v1/complaint/${id}`)
      .expect("Content-Type", /application\/json/)
      .expect(200);
  });
});

describe("POST /complaint", () => {
  test("should create a complaint", async () => {
    const response = await api.post("/api/v1/complaint").send({
      clientId: 1,
      employeeId: 1,
      fileId: 1,
      date: "2025-01-29T00:00:00.000Z",
      address: "Street H Aveniue Miraflores",
      organizationId: 37,
    });
    expect(response.statusCode).toBe(200);
  });
});
