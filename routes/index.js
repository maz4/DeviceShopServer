import home from "./home.js";
import products from "./products.js";

const routes = app => {
  app.get("/", home);
  app.get("/products", products);
};

export default routes;
