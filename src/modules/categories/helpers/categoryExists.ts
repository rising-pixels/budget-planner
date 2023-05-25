import { Category } from "../types/Category";

export const categoryNameExists = (categories: Category[], name: string) => {
  return !!categories.some(
    (category: Category) => category.name.toLowerCase() === name.toLowerCase()
  );
};

export const categoryUuidExists = (categories: Category[], uuid: string) => {
  return !!categories.some((category) => category.uuid === uuid);
};
