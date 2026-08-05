const request = require("supertest");
const app = require("../server");

describe("Reviews API", () => {
  test("GET /reviews should return status 200", async () => {
    const response = await request(app).get("/reviews");

    expect(response.statusCode).toBe(200);
  });

  test("GET /reviews should return JSON", async () => {
    const response = await request(app).get("/reviews");

    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /reviews should return an array", async () => {
    const response = await request(app).get("/reviews");

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /reviews should contain at least one review", async () => {
    const response = await request(app).get("/reviews");

    expect(response.body.length).toBeGreaterThan(0);
  });
});