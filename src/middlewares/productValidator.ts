import { body, param } from "express-validator";

export const createProductValidation = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Description is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("category").isString().notEmpty().withMessage("Category is required"),
  body("inStock")
    .optional()
    .isBoolean()
    .withMessage("InStock must be a boolean value"),
];

export const updateProductValidation = [
  param("id").isMongoId().withMessage("Invalid product ID"),
  body("name")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("Name must be a string"),
  body("description")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("Description must be a string"),
  body("price").optional().isNumeric().withMessage("Price must be a number"),
  body("category")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("Category must be a string"),
  body("inStock")
    .optional()
    .isBoolean()
    .withMessage("InStock must be a boolean value"),
];
