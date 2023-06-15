import React from "react";
import { items } from "./items";
import { Tabs } from "antd";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const NavStyled = styled.nav`
  padding: 0 16px;
`;

export const Navbar = () => {
  const router = useRouter();
  const onChange = (key: string) => {
    router.push(key);
  };

  return (
    <NavStyled>
      <Tabs
        defaultActiveKey={router.pathname}
        items={items}
        onChange={onChange}
      />
    </NavStyled>
  );
};
