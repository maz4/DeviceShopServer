import {getProducts} from "../handlers/productsHandler.js";

const products = (req, res) => {
  const products = getProducts();
  res.send(products);
};

export default products;
