const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const mockData = require("./mockdata.json");

test("Successful request", async () => {
  const response = await request
    .post("/filter-data")
    .send(mockData.request);

  expect(response.statusCode).toBe(200);
});

test("Successful response Matching", async () => {
  const response = await request
    .post("/filter-data")
    .send(mockData.request);

  expect(response.body).toEqual(mockData.response);
});

test("Get result with no data", async () => {
  const response = await request
    .post("/filter-data")
    .send(mockData.requestwithnodata);

  expect(response.body).toEqual(mockData.responsewithnodata);
});

test("Missing Parameters", async () => {
  const response = await request
    .post("/filter-data")
    .send(mockData.requestmissingparameters);

  const parsedResponse = JSON.parse(response.text);
  expect(parsedResponse.error.msg).toEqual("Input fields cannot be empty");
});