import express, { Request, Response, NextFunction } from 'express';
import prisma from '@/src/PrismaClient/prisma';
import { validate } from '@/src/middlewares';
import { carSchema, CarInput } from '@/src/schemas/carsSchemas';

const router = express.Router();

// Route pour récupérer toutes les voitures
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cars = await prisma.car.findMany();
    res.json({ cars });
  } catch (error) {
    next(error); // Gestion des erreurs Prisma via le middleware errorHandler
  }
});

// Route pour créer une nouvelle voiture
router.post('/', validate(carSchema, 'body'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const carData: CarInput = req.body;
    const newCar = await prisma.car.create({ data: carData });
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
});

export default router;
