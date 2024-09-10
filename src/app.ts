import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import * as middlewares from "./middlewares";
import api from "./api/index";

dotenv.config();

const app = express();

// Middlewares globaux
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Route d'accueil
app.get("/", (req, res) => {
  res.json({
    message: "Hello !",
  });
});

// Routes API
app.use("/api", api);

// Gestion des erreurs
app.use(middlewares.notFound);
app.use(middlewares.zodErrorHandler);
app.use(middlewares.errorHandler);

export default app;
