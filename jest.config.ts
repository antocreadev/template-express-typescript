// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Utiliser ts-jest pour transpiler les fichiers TypeScript
  testEnvironment: "node", // Utilise l'environnement Node.js pour les tests
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/src/$1", // Mapper les alias définis dans tsconfig.json
  },
  moduleFileExtensions: ["ts", "js"], // Prend en charge les fichiers .ts et .js
};

export default config;