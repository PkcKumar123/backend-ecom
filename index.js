import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

//using middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());

//database connection
mongoose.connect(process.env.DB, () => {
  console.log("database connected");
});

//importing routes
import user from "./routes/userRoutes.js";
import product from "./routes/productRoutes.js";

//using routes
app.use("/api", user);
app.use("/api", product);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
