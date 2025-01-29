import { response } from "express";
import app from "../app";
import request from "supertest";

const api = request(app);

describe("POST /auth", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.post("/api/v1/auth/register").send({
      email: "test@admin.com",
      lastname: "test lastname",
      name: "test name",
      password: "test password",
    });
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /api/v1/login", () => {
  test("should login succeffully with a token correctly", async () => {
    const response = await api.post("/api/v1/auth/login").send({
      email: "test@admin.com",
      password: "test password",
    })
    expect(response.statusCode).toBe(200)
  });
});
