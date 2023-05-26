import { MySubclassedDexie } from "../../pages";
import { categoryNameExists } from "../helpers/categoryExists";
import { v4 as uuidv4 } from "uuid";

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
