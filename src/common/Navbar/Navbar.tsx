import React from "react";
import { items } from "./items";
import { Tabs } from "antd";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const NavStyled = styled.nav`
  padding: 0 16px;
`;
const TabsStyled = styled(Tabs)`
  .ant-tabs-ink-bar {
    color: ${(props) => props.theme["geekblue-5"]};
  }
  .ant-tabs-tab a {
    color: ${(props) => props.theme.colorText};
  }
  .ant-tabs-tab-active a {
    color: ${(props) => props.theme["geekblue-5"]};
  }
`;

export const Navbar = () => {
  const router = useRouter();

  return (
    <NavStyled>
      <TabsStyled defaultActiveKey={router.pathname} items={items} />
    </NavStyled>
  );
};
