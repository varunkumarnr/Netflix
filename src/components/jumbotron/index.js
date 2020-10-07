import React from "react";
import {
  Inner,
  Container,
  Pane,
  Item,
  Title,
  Subtitle,
  Image,
} from "./styles/jumbotron";
const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Subtitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps}></Image>;
};
