import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Spices API",
      version: "1.0.0",
      description: "API documentation for Spices e-commerce platform",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 9000}`,
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Product: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Unique identifier for the product",
            },
            name: {
              type: "string",
              description: "Name of the product",
            },
            description: {
              type: "string",
              description: "Description of the product",
            },
            price: {
              type: "number",
              description: "Price of the product",
            },
            category: {
              type: "string",
              description: "Category of the product",
            },
            inStock: {
              type: "boolean",
              description: "Availability of the product",
            },
          },
          required: ["name", "description", "price", "category"],
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
