import { Category } from "../types/category";

export const categoryNameExists = (categories: Category[], name: string) => {
  return categories.some(
    (category: Category) => category.name.toLowerCase() === name.toLowerCase()
  );
};
