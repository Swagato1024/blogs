const request = require("supertest");
const { describe, it } = require("node:test");
const { createApp } = require("../src/app");

describe("/greet", () => {
  it("should greet", (_, done) => {
    const app = createApp();

    request(app)
      .get("/greet")
      .expect("content-type", /html/)
      .expect("Hello world")
      .expect(200)
      .end(done);
  });
});
