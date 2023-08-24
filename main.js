const { createApp } = require("./src/app");

const PORT = 9005;

const main = () => {
  const app = createApp();

  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

main();
