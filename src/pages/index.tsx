import React, { useState, useEffect } from "react";
import Dexie, { Table } from "dexie";

interface LuckyNumber {
  number: number;
}

class MySubclassedDexie extends Dexie {
  luckyNumber: Table<LuckyNumber>;

  constructor() {
    super("budgetPlannerDatabase");
    this.version(1).stores({
      luckyNumber: "number",
    });
  }
}

const db = new MySubclassedDexie();

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
      <p>Hello World</p>
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

export default HomePage;
