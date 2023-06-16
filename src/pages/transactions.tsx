import React from "react";
import { Transactions } from "../transactions/Transactions";
import Head from "next/head";

const TransactionsView = () => {
  return (
    <>
      <Head>
        <title>Transactions | Budget Planner</title>
      </Head>
      <Transactions />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default TransactionsView;
