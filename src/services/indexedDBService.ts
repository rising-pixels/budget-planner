import { MySubclassedDexie, Category } from "../pages";
import { v4 as uuidv4 } from "uuid";
import { categoryNameExists, categoryUuidExists } from "./helpers/categoryExists";

export const addCategory = async (db: MySubclassedDexie, name: string) => {
  try {
    const existingCategories = await db.categories.toArray();
    if (categoryNameExists(existingCategories, name)) {
      throw new Error("This category exists!");
    }
    const category = { uuid: uuidv4(), name };
    await db.categories.add(category);
  } catch (error) {
    console.log(error);
  }
};
export const changeCategoryName = async (
  db: MySubclassedDexie,
  { uuid, name }: Category
) => {
  try {
    const existingCategories = await db.categories.toArray();
    if (categoryNameExists(existingCategories, name)) {
      throw new Error("This category exists!");
    }
    await db.categories.update(uuid, { name });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategory = async (db: MySubclassedDexie, uuid: string) => {
  try {
    const existingCategories = await db.categories.toArray();
    if (categoryUuidExists(existingCategories, uuid)) {
      await db.categories.delete(uuid);
    } else {
      throw new Error("This category does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};
