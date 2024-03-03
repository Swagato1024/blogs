const loginHandler = (req, res) => {
  const username = req.body;
  req.cookie("username", username);
};

module.exports = { loginHandler };
