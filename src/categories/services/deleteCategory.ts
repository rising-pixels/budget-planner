import { MySubclassedDexie } from "../../pages";

export const deleteCategory = async (db: MySubclassedDexie, uuid: string) => {
  return db.categories.delete(uuid);
};
