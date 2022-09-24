import express from "express";
import {
  createProduct,
  getAllProducts,
  getaProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/create").post(createProduct);

router.route("/products").get(getAllProducts);

router.route("/product/:id").get(getaProduct);

export default router;
