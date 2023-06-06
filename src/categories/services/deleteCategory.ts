import { MySubclassedDexie } from "../../pages";

export const deleteCategory = async (db: MySubclassedDexie, id: string) => {
  return db.categories.delete(id);
};
