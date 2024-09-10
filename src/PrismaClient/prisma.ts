import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("🟢 Connected to the database");
  } catch (error) {
    console.error("🔴 Error connecting to the database", error);
    process.exit(1); // Quitte le processus si la connexion échoue
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await prisma.$disconnect();
    console.log("🟢 Disconnected from the database");
  } catch (error) {
    console.error("🔴 Error disconnecting from the database", error);
    process.exit(1);
  }
};

export default prisma;
