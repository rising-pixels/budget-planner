import React from "react";
import Dexie, { Table } from "dexie";
import { Category } from "../categories/types/category";
import Head from "next/head";
import { generatePageTitle } from "../common/helpers/generatePageTitle";

export class MySubclassedDexie extends Dexie {
  categories: Table<Category>;

  constructor() {
    super("budgetPlannerDatabase");
    this.version(3).stores({
      categories: "&id, name",
    });
  }
}

const HomePage = () => {
  return (
    <Head>
      <title>{generatePageTitle("Budget")}</title>
    </Head>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
