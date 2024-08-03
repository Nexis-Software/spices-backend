import Product, { IProduct } from "../models/productModel";

const findAllProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

const findProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const product = new Product(productData);
  return await product.save();
};

const updateProduct = async (
  id: string,
  productData: Partial<IProduct>
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};

export default {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
