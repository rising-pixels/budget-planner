import { MySubclassedDexie } from "../../pages";
import { Category } from "../types/category";
import { categoryNameExists } from "../validators/categoryExists";

export const changeCategoryName = async (
  db: MySubclassedDexie,
  { id, name }: Category
) => {
  const trimmedName = name.trim();
  const existingCategories = await db.categories.toArray();
  if (categoryNameExists(existingCategories, trimmedName)) {
    throw new Error("This category already exists!");
  }

  return db.categories.update(id, { name: trimmedName });
};
