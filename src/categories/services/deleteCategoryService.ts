import { MySubclassedDexie } from "../../pages";
import { categoryUuidExists } from "../helpers/categoryExists";

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
