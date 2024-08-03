export interface ProductDTO {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock?: boolean; // Optional field
  createdAt?: Date; // Optional field
}
