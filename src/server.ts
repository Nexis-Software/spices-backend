import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import errorHandler from "./middlewares/errorHandler";
import setupSwagger from "./config/swagger";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Swagger setup
setupSwagger(app);

app.use("/api/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
