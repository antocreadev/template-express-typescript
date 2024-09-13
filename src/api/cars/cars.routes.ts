import express, { Request, Response, NextFunction } from "express";
import prisma from "@/src/PrismaClient/prisma";
import { validate } from "@/src/middlewares";
import { carSchema, CarInput } from "@/src/schemas/carsSchemas";
import { getAllCars, createCar, deleteCarById, deleteAllCars, updateCar} from "./cars.service";

const router = express.Router();

// Route pour récupérer toutes les voitures
/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Récupérer toutes les voitures
 *     tags: [Car]
 *     responses:
 *       200:
 *         description: Liste de toutes les voitures
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cars:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Car'
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cars = await getAllCars();
    res.json({ cars });
  } catch (error) {
    next(error); // Gestion des erreurs Prisma via le middleware errorHandler
  }
});

// Route pour créer une voiture
/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Créer une voiture
 *     tags: [Car]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Voiture créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */
router.post(
  "/",
  validate(carSchema, "body"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carData: CarInput = req.body;
      const newCar = await createCar(carData);
      res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
);

// Route pour supprimer une voiture avec son id 
/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Supprimer une voiture
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la voiture
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Voiture supprimée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */
router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const deletedCar = await deleteCarById(id);
    res.json(deletedCar);
  } catch (error) {
    next(error);
  }
}
);

// Route pour supprimer toutes les voitures
/**
 * @swagger
 * /cars:
 *   delete:
 *     summary: Supprimer toutes les voitures
 *     tags: [Car]
 *     responses:
 *       200:
 *         description: Toutes les voitures supprimées
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteAllCars();
    res.json({ message: "All cars deleted" });
  } catch (error) {
    next(error);
  }
}
);


// Route pour mettre à jour une voiture avec son id
router.put(
  "/:id",
  validate(carSchema, "body"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id);
      const carData: CarInput = req.body;
      const updatedCar = await updateCar(id, carData);
      res.json(updatedCar);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
