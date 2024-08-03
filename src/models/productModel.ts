import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  createdAt: Date;
}

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 100,
      trim: true,
      match: /^[a-zA-Z0-9 ]+$/,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
      trim: true,
    },
    price: {
      type: Number,
      min: [1, "Price must be a greater than 0"],
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Spices", "Herbs", "Seasonings"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
