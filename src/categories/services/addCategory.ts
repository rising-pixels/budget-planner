import { MySubclassedDexie } from "../../pages";
import { categoryNameExists } from "../validators/categoryExists";
import { v4 as uuidv4 } from "uuid";

export const addCategory = async (db: MySubclassedDexie, name: string) => {
  const trimmedName = name.trim();
  const existingCategories = await db.categories.toArray();
  if (categoryNameExists(existingCategories, trimmedName)) {
    throw new Error("This category already exists!");
  }
  const category = { id: uuidv4(), name: trimmedName };

  return db.categories.add(category);
};
