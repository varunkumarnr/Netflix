import React from "react";
import { Link } from "react-router-dom";
import {
  Background,
  Feature,
  Container,
  Logo,
  ButtonLink,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
  Profile,
  Picture,
  Dropdown,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children} </Group>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`images/users/${src}.png`}></Picture>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps}></Logo>
    </Link>
  );
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
