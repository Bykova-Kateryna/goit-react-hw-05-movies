import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoHomeButton = styled(NavLink)`
  border: 2px solid #abb4be;
  padding: 5px;
  text-decoration: none;
  color: black;
  font-size: 16px;

  &:hover,
  &:focus {
    color: #2384f5;
  }
`;

export const NotFoundPageSection = styled.main`
  background: linear-gradient(to left, #2980b9, #6dd5fa, #ffffff);
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 15px;
`;
export const NotFoundPageText = styled.p`
  font-size: 56px;
`;
