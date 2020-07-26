import homeHandler from "./homeHandler.js";

const routes = app => {
  app.get("/", homeHandler);
};

export default routes;
