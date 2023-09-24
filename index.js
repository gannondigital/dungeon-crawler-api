const express = require("express");

const app = new express();
const PORT = 3030;

import("./app/router.mjs")
  .then(({ dungeonRouter }) => {
    app.use("/", dungeonRouter);
    app.listen(PORT);
    console.log(`Now listening on port ${PORT}`);
  })
  .catch((err) => {
    console.error(`Could not start express app: ${err}`);
  });
