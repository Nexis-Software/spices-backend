# Spices E-Commerce Platform

Welcome to the Spices E-Commerce Platform! This application is a MERN stack application designed for selling spices. It provides a RESTful API with CRUD operations for products, integrated with Swagger documentation for easy API exploration.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for managing products
- Unique constraints on product names
- Custom validation for product fields
- Swagger documentation for API endpoints
- Error handling middleware

## Tech Stack

- **Frontend:** React (not included in this repository)
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Documentation:** Swagger
- **TypeScript:** For type safety and development efficiency

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- Yarn or npm

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nexis-Software/spices-backend.git
   cd spices-backend
Install Dependencies:

Using Yarn:

bash
Copy code
yarn install
Using npm:

bash
Copy code
npm install
Configuration
Create a .env File:

Copy the .env.example file to .env and update the environment variables with your MongoDB connection string and other configuration settings.

env
Copy code
PORT=9000
MONGO_URI=mongodb://localhost:27017/spicesdb
Setup Swagger Documentation:

Ensure you have Swagger dependencies installed and properly configured in src/config/swagger.ts.

Running the Application
Development Mode:

bash
Copy code
yarn dev
# or
npm run dev
This command starts the application with ts-node-dev for auto-reloading and TypeScript support.

Production Mode:

bash
Copy code
yarn build
# or
npm run build
This command compiles TypeScript files to JavaScript. Then start the server:

bash
Copy code
yarn start
# or
npm start
API Documentation
Swagger documentation is available at http://localhost:9000/api-docs after running the application. This provides interactive API documentation for all available endpoints.

Folder Structure
src/: Main source directory
controllers/: Contains controller files
dtos/: Contains DTO (Data Transfer Object) files
models/: Contains Mongoose models
routes/: Contains route definitions
middlewares/: Contains middleware functions
config/: Configuration files (e.g., database, Swagger)
utils/: Utility functions
server.ts: Entry point of the application
Contributing
We welcome contributions! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Key Sections Explained

- **Features**: Lists the main functionalities of the application.
- **Tech Stack**: Describes the technologies used in the project.
- **Getting Started**: Provides instructions on how to set up and run the project.
- **API Documentation**: Points to the Swagger documentation URL.
- **Folder Structure**: Outlines the project's directory structure.
- **Contributing**: Provides guidelines for contributing to the project.
- **License**: Specifies the licensing details.
