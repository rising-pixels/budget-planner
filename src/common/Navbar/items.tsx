import { DollarOutlined, CreditCardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";
import { APP_URLS } from "../appUrls";

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
    key: APP_URLS.home,
    label: (
      <LinkStyled href={APP_URLS.home}>
        <DollarOutlined />
        <SpanStyled>Budget</SpanStyled>
      </LinkStyled>
    ),
  },
  {
    key: APP_URLS.transactions,
    label: (
      <LinkStyled href={APP_URLS.transactions}>
        <CreditCardOutlined />
        <SpanStyled>Transactions</SpanStyled>
      </LinkStyled>
    ),
  },
];
