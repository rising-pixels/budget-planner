import React from "react";
import { Transactions } from "../transactions/Transactions";
import Head from "next/head";
import { generatePageTitle } from "../helpers/generatePageTitle";

const TransactionsView = () => {
  return (
    <>
      <Head>
        <title>{generatePageTitle("Transactions")}</title>
      </Head>
      <Transactions />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default TransactionsView;
