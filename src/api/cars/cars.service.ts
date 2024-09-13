import prisma from "@/src/PrismaClient/prisma";
import { CarInput } from "@/src/schemas/carsSchemas";
import { Prisma } from "@prisma/client";

// Fonction pour récupérer toutes les voitures
export const getAllCars = async () => {
  try {
    return await prisma.car.findMany();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Gestion des erreurs spécifiques à Prisma (e.g., violation de contraintes)
      throw new Error("Database error");
    }
    throw error;
  }
};

// Fonction pour créer une nouvelle voiture
export const createCar = async (carData: CarInput) => {
  try {
    return await prisma.car.create({
      data: carData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Gestion des erreurs spécifiques à Prisma
      throw new Error("Database error");
    }
    throw error;
  }
};

export const deleteCarById = async (id: number) => {
  try {
    return await await prisma.car.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Gestion des erreurs spécifiques à Prisma
      throw new Error("Database error");
    }
    throw error;
  }
};

export const deleteAllCars = async () => {
  try {
    return await prisma.car.deleteMany();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Gestion des erreurs spécifiques à Prisma
      throw new Error("Database error");
    }
    throw error;
  }
}

export const updateCar = async (id: number, carData: CarInput) => {
  try {
    return await prisma.car.update({
      where: {
        id: id,
      },
      data: carData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Gestion des erreurs spécifiques à Prisma
      throw new Error("Database error");
    }
    throw error;
  }
};
