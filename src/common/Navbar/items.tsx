import { DollarOutlined, CreditCardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";
import { HOME_URL, TRANSACTIONS_URL } from "../appUrls";

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
    key: HOME_URL,
    label: (
      <LinkStyled href={HOME_URL}>
        <DollarOutlined />
        <SpanStyled>Budget</SpanStyled>
      </LinkStyled>
    ),
  },
  {
    key: TRANSACTIONS_URL,
    label: (
      <LinkStyled href={TRANSACTIONS_URL}>
        <CreditCardOutlined />
        <SpanStyled>Transactions</SpanStyled>
      </LinkStyled>
    ),
  },
];
