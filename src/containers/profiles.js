import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { Profiles } from "../components/index";
export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.logo
            to={ROUTES.HOME}
            src='./images/logo/logo.svg'
            alt='Netflix'
          ></Header.logo>
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's Watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName} </Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
