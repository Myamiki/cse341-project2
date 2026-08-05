const request = require("supertest");
const app = require("../server");

describe("Actors API", () => {
  test("GET /actors should return status 200", async () => {
    const response = await request(app).get("/actors");

    expect(response.statusCode).toBe(200);
  });

  test("GET /actors should return JSON", async () => {
    const response = await request(app).get("/actors");

    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /actors should return an array", async () => {
    const response = await request(app).get("/actors");

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /actors should contain at least one actor", async () => {
    const response = await request(app).get("/actors");

    expect(response.body.length).toBeGreaterThan(0);
  });
});