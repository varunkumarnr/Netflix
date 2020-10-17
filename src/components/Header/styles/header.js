import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/util/${src}.jpg` : "../images/util/home-bg.jpg"})
    top left / cover no-repeat;
`;
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const Frame = styled.div``;
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  display: block;
  background-color: #e50914;
  width: 64px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`;
