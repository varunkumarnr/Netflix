import React from "react";
import { Header } from "../components/index";
import * as ROUTES from "../constants/routes";
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.logo
          to={ROUTES.HOME}
          src='./images/logo/logo.svg'
          alt='Netflix'
        />
        <Header.ButtonLink to={ROUTES.SIGNIN}>SIGN IN</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
