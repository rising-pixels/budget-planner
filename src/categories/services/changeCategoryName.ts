import { MySubclassedDexie } from "../../pages";
import { Category } from "../types/category";
import { categoryNameExists } from "../validators/categoryExists";

export const changeCategoryName = async (
  db: MySubclassedDexie,
  { uuid, name }: Category
) => {
  const existingCategories = await db.categories.toArray();
  if (categoryNameExists(existingCategories, name)) {
    throw new Error("This category exists!");
  }
  
  return db.categories.update(uuid, { name: name.trim() });
};
