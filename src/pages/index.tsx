import React, { useState, useEffect } from "react";
import Dexie, { Table } from "dexie";
import { Typography } from "antd";
import "antd/dist/reset.css";
import styled from "@emotion/styled";
import { Category } from "../categories/types/category";

interface LuckyNumber {
  number: number;
}

export class MySubclassedDexie extends Dexie {
  luckyNumber: Table<LuckyNumber>;
  categories: Table<Category>;

  constructor() {
    super("budgetPlannerDatabase");
    this.version(2).stores({
      luckyNumber: "number",
      categories: "&id, name",
    });
  }
}

const db = new MySubclassedDexie();

const { Text } = Typography;

const TextStyled = styled(Text)`
  color: ${(props) => props.theme.blue6};
`;

const HomePage = () => {
  const [luckyNumber, setLuckyNumber] = useState<number | null>(null);

  const drawNumberHandler = async () => {
    try {
      await db.luckyNumber.clear();
      const randomNumber = Math.floor(Math.random() * 11);
      setLuckyNumber(randomNumber);
      await db.luckyNumber.add({ number: randomNumber });
    } catch (error) {
      console.log(error);
    }
  };

  const clearDataHandler = async () => {
    try {
      await db.luckyNumber.clear();
      setLuckyNumber(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getLuckyNumber = async () => {
      try {
        const data = await db.luckyNumber.toArray();
        if (data.length > 0) {
          setLuckyNumber(data[0].number);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLuckyNumber();
  }, []);

  return (
    <>
      <TextStyled>Hello World</TextStyled>
      <button onClick={clearDataHandler}>Clear Data</button>
      <button onClick={drawNumberHandler}>Draw a number</button>
      {luckyNumber !== null ? (
        <p>Today lucky number is {luckyNumber}</p>
      ) : (
        <p>No luck today</p>
      )}
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
