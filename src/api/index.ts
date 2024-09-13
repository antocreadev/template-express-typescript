import MessageResponse from "@/src/interfaces/MessageResponse";
import express from "express";
import { Request, Response } from "express-serve-static-core";
import CarsRoutes from "./cars/cars.routes";

const router = express.Router();

router.get("/", (req: Request, res: Response<MessageResponse>) => {

  res.json({
    message: "Groupe Cotal API 👋",
  });
});

router.use("/cars", CarsRoutes);

export default router;