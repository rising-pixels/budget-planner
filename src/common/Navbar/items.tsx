import { DollarOutlined, CreditCardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const SpanStyled = styled.span`
  font-size: 16px;
`;

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const items = [
  {
    key: "/",
    label: (
      <DivStyled>
        <DollarOutlined />
        <SpanStyled>Budget</SpanStyled>
      </DivStyled>
    ),
  },
  {
    key: "/transactions",
    label: (
      <DivStyled>
        <CreditCardOutlined />
        <SpanStyled>Transactions</SpanStyled>
      </DivStyled>
    ),
  },
];
