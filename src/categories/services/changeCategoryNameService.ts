import { MySubclassedDexie } from "../../pages";
import { Category } from "../types/category";
import { categoryNameExists } from "../helpers/categoryExists";

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
