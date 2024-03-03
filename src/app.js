const express = require("express");
const { greetUser } = require("./handlers/greet-handlers");

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.post("/login", loginHandler);
  app.get("/greet", greetUser);

  return app;
};

module.exports = { createApp };
