import { Item, Category } from '../shared/interfaces/products-interface';

export interface ExtrasExtended {
  id: number;
  name: string;
  min: number;
  max: number;
  items: Item[];
  options?: Item[];
}

export interface PostData {
  id: number;
  order: number;
  category: Category;
  extras: ExtrasExtended[];
}
