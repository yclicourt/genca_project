import app from "../app";
import request from "supertest";

const api = request(app);

describe("GET /organization", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.get("/api/v1/organization").send();
    expect(response.status).toBe(200);
  });
  test("should respond with an object", async () => {
    const response = await api.get("/api/v1/organization").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});
describe("POST /organization", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.post("/api/v1/organization").send({
      address: "test address",
      level: "NATION",
      categoryEmployeeId: 2,
      denomination: "test denomination",
    });
    expect(response.statusCode).toBe(200);
  });
  test("should have a content-type: application in header", async () => {
    const response = await request(app).post("/api/v1/organization").send();
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
