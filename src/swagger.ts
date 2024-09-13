import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//load the port from the .env file
import dotenv from 'dotenv';
import { Express } from 'express';
dotenv.config();

const port = process.env.PORT || 8008;


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation de l\'API pour le projet Groupe Cotal',
    },
    servers: [
      {
        url: "http://localhost:"+port+"/api",
      },
    ],
    components: {
      schemas: {
        Car: {
          type: 'object',
          properties: {
            image: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            link: { type: 'string' },
            price: { type: 'number' },
            remise: { type: 'number' },
          },
        },
        Site: {
          type: 'object',
          properties: {
            imageStart: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            color: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./src/api/**/*.ts', './src/schemas/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
