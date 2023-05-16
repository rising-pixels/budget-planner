import React from "react";
import { Typography } from "antd";
import "antd/dist/reset.css";
import styled from "@emotion/styled";

const { Text } = Typography;
const TextStyled = styled(Text)`
  color: ${(props) => props.theme.blue6};
`;
const HomePage = () => {

  return <TextStyled>Hello World</TextStyled>;
};

export default HomePage;
