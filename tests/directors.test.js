const request = require("supertest");
const app = require("../server");

describe("Directors API", () => {
  test("GET /directors should return status 200", async () => {
    const response = await request(app).get("/directors");

    expect(response.statusCode).toBe(200);
  });

  test("GET /directors should return JSON", async () => {
    const response = await request(app).get("/directors");

    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /directors should return an array", async () => {
    const response = await request(app).get("/directors");

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /directors should contain at least one director", async () => {
    const response = await request(app).get("/directors");

    expect(response.body.length).toBeGreaterThan(0);
  });
});