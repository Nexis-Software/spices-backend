import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import errorHandler from "./middlewares/errorHandler";
import setupSwagger from "./config/swagger";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

connectDB();

const app = express();

// Enable Helmet for security
app.use(helmet());

// Enable CORS
const corsOptions = {
  origin: "*", // Replace with your frontend origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable if you need to pass cookies with requests
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

// Swagger setup
setupSwagger(app);

app.use("/api/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
