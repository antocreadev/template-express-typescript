import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import * as middlewares from "./middlewares";
import api from "./api/index";
import { setupSwagger } from "./swagger";
import path from "path";



const app = express();

// Middlewares globaux
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Documentation Swagger
setupSwagger(app);

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend/assets')));

// Route d'accueil
app.get("/", (req, res) => {
  // return html file
  res.sendFile(path.join(__dirname, "/frontend/index.html"));
  // res.json({
  //   message: "Hello !",
  // });
});

// Routes API
app.use("/api", api);

// Gestion des erreurs
app.use(middlewares.notFound);
app.use(middlewares.zodErrorHandler);
app.use(middlewares.errorHandler);

export default app;
