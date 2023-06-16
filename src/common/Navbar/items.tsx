import { DollarOutlined, CreditCardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";

const SpanStyled = styled.span`
  font-size: 1rem;
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const items = [
  {
    key: "/",
    label: (
      <LinkStyled href="/">
        <DollarOutlined />
        <SpanStyled>Budget</SpanStyled>
      </LinkStyled>
    ),
  },
  {
    key: "/transactions",
    label: (
      <LinkStyled href="/transactions">
        <CreditCardOutlined />
        <SpanStyled>Transactions</SpanStyled>
      </LinkStyled>
    ),
  },
];
