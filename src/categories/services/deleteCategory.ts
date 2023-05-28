import { MySubclassedDexie } from "../../pages";
import { categoryUuidExists } from "../validators/categoryExists";

export const deleteCategory = async (db: MySubclassedDexie, uuid: string) => {
  const existingCategories = await db.categories.toArray();
  if (categoryUuidExists(existingCategories, uuid)) {
    return db.categories.delete(uuid);
  } else {
    throw new Error("This category does not exist");
  }
};
