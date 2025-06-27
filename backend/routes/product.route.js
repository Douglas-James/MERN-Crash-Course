import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js"; // Import the controller function
const router = express.Router();

// Get all products
router.get("/", getProducts);

// create a new product
router.post("/", createProduct);

// update a product by ID
router.put("/:id", updateProduct);

// delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
