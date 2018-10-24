export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Products {
  products: Product[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Images {
  full_size: string;
  thumbnail: string;
}

export interface Item {
  id: number;
  name: string;
  extra_id: number;
  price: number;
}

export interface Extras {
  id: number;
  name: string;
  min: number;
  max: number;
  items: Item[];
}

export interface DetailedProduct {
  id: number;
  name: string;
  price: number;
  before_sale_price?: any;
  description: string;
  full_description: string;
  order: number;
  category: Category;
  images: Images;
  extras: Extras[];
  tags: any[];
  availability: string;
}
