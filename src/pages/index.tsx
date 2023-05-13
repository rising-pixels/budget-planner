import React from "react";
import { Typography } from "antd";
import "antd/dist/reset.css";
import { css, useTheme } from "@emotion/react";
import "@emotion/react";
/** @jsxImportSource @emotion/react */

const HomePage = () => {
  const { blue6 } = useTheme();
  const { Text } = Typography;
  const textStyle = css`color: ${blue6};`;
  
  return <Text css={textStyle}>Hello World</Text>;
};

export default HomePage;
