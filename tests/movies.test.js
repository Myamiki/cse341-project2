const request = require("supertest");
const app = require("../server");

describe("Movies API", () => {
  test("GET /movies should return status 200", async () => {
    const response = await request(app).get("/movies");

    expect(response.statusCode).toBe(200);
  });

  test("GET /movies should return JSON", async () => {
    const response = await request(app).get("/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /movies should return an array", async () => {
    const response = await request(app).get("/movies");

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /movies should contain at least one movie", async () => {
    const response = await request(app).get("/movies");

    expect(response.body.length).toBeGreaterThan(0);
  });
});