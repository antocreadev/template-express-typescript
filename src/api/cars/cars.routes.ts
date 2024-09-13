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
 *     summary: Récupère toutes les voitures
 *     responses:
 *       200:
 *         description: Liste des voitures
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cars:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       brand:
 *                         type: string
 *                       model:
 *                         type: string
 *                       year:
 *                         type: integer
 *                       color:
 *                         type: string
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cars = await getAllCars();
    res.json({ cars });
  } catch (error) {
    next(error); // Gestion des erreurs Prisma via le middleware errorHandler
  }
});

// Route pour créer une nouvelle voiture
/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Créer une nouvelle voiture
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 example: "Toyota"
 *               model:
 *                 type: string
 *                 example: "Corolla"
 *               year:
 *                 type: integer
 *                 example: 2020
 *               color:
 *                 type: string
 *                 example: "Blue"
 *     responses:
 *       201:
 *         description: Voiture créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 brand:
 *                   type: string
 *                   example: "Toyota"
 *                 model:
 *                   type: string
 *                   example: "Corolla"
 *                 year:
 *                   type: integer
 *                   example: 2020
 *                 color:
 *                   type: string
 *                   example: "Blue"
 *       400:
 *         description: Mauvaise requête (erreur de validation)
 *       500:
 *         description: Erreur serveur
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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la voiture
 *     responses:
 *       200:
 *         description: Voiture supprimée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 brand:
 *                   type: string
 *                   example: "Toyota"
 *                 model:
 *                   type: string
 *                   example: "Corolla"
 *                 year:
 *                   type: integer
 *                   example: 2020
 *                 color:
 *                   type: string
 *                   example: "Blue"
 *       404:
 *         description: Voiture non trouvée
 *       500:
 *         description: Erreur serveur
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
 *     responses:
 *       200:
 *         description: Voitures supprimées avec succès
 *       500:
 *         description: Erreur serveur
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
/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Mettre à jour une voiture
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la voiture
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 example: "Toyota"
 *               model:
 *                 type: string
 *                 example: "Corolla"
 *               year:
 *                 type: integer
 *                 example: 2020
 *               color:
 *                 type: string
 *                 example: "Blue"
 *     responses:
 *       200:
 *         description: Voiture mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 brand:
 *                   type: string
 *                   example: "Toyota"
 *                 model:
 *                   type: string
 *                   example: "Corolla"
 *                 year:
 *                   type: integer
 *                   example: 2020
 *                 color:
 *                   type: string
 *                   example: "Blue"
 *       404:
 *         description: Voiture non trouvée
 *       500:
 *         description: Erreur serveur
 */
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
