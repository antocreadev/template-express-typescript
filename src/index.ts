import app from './app';
import dotenv from "dotenv";
import { connectToDatabase, disconnectFromDatabase } from "@/src/PrismaClient/prisma";

dotenv.config();

export const port = process.env.PORT || 8008;

// Fonction principale pour démarrer le serveur
const main = async () => {
  await connectToDatabase(); // Connexion à la base de données

  const server = app.listen(port, () => {
    console.log(`🚀 Server listening at http://localhost:${port}`);
  });

  // Écouter l'événement de fermeture du serveur
  process.on('SIGTERM', async () => {
    console.log("🟡 Gracefully shutting down");
    server.close(async () => {
      await disconnectFromDatabase(); // Déconnexion de la base de données
      console.log("Server shut down");
    });
  });
};

main().catch(async (error) => {
  console.error("🔴 Server start failed", error);
  await disconnectFromDatabase();
  process.exit(1);
});
