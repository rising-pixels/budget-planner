import React from "react";
import Head from "next/head";
import { generatePageTitle } from "../common/helpers/generatePageTitle";

const TransactionsView = () => {
  return (
    <>
      <Head>
        <title>{generatePageTitle("Transactions")}</title>
      </Head>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default TransactionsView;
