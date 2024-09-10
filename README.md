# Template Express, Typescript, Zod, Prisma 

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)

## Introduction
Ce projet est un template pour démarrer un projet Express avec Typescript, Zod et Prisma.

## Getting Started
1. Cloner le projet
2. Installer les dépendances
```bash
npm install
```
3. Créer un fichier `.env` à la racine du projet et ajouter les variables d'environnement du fichier `.env.example`
4. Initialiser Prisma avec la commande
```bash
make prisma-init
```
5. Générer les fichiers Prisma
```bash
make prisma-migrate
```

## Project Structure
``` bash
.
├── PrismaClient
│   └── prisma.ts 
├── api
│   ├── cars
│   │   ├── cars.routes.ts
│   │   └── cars.service.ts
│   └── index.ts
├── app.ts
├── index.ts
├── interfaces
├── middlewares.ts
└── schemas
```

- `PrismaClient`: Contient le client Prisma
- `api`: Contient les routes et les services de l'API
- `app.ts`: Fichier qui configure l'application Express
- `index.ts`: Fichier qui lance le serveur Express
- `interfaces`: Contient les interfaces
- `middlewares.ts`: Contient les middlewares
- `schemas`: Contient les schémas Zod



# template-express-typescript
