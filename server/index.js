import express from "express";
import routes from "./routes/index.js";
import config from "../config.js";

const init = () => {
  const {SERVER_PORT} = config.get();
  const app = express();

  routes(app);

  app.listen(SERVER_PORT, () =>
    console.log("Server is listening on port " + SERVER_PORT),
  );
};

export default init;
