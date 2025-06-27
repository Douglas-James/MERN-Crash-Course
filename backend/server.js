import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./config/db.js";
const app = express();
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/products", productRoutes); // Use the product routes

app.use;
app.listen(PORT, () => {
  connectDB(); // Connect to MongoDB
  console.log(`Server is running on http://localhost:${PORT}`);
});
