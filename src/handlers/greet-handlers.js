const greetUser = (req, res) => {
  res.status(200);
  res.type("html");
  res.send("Hello world");
};

module.exports = { greetUser };
