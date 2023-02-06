import styled from "styled-components";
import { colors } from "./Theme";

export const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: center;
  background-color: ${colors.two};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 992px) {
    margin-right: 3em;
  }

  @media (min-width: 1200px) {
    margin-right: 25em;
  }
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: ${colors.one};
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1rem;

  &:hover {
    color: ${colors.six};
  }

  @media (min-width: 380px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: block;
  }

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const B = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  color: ${colors.one};
  flex-direction: row;
  margin-top: 12px;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 1.5em;

  &:hover {
    color: ${colors.six};
  }
`;

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  margin-right: 10px;
`;

export const SPAN = styled.span`
  display: flex;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  justify-content: center;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Boxburguer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Boxburguer2 = styled.div`
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  color: ${colors.six};
  display: flex;
`;

export const AB = styled.a`
  text-decoration: none;
  color: ${colors.one};
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1rem;
  flex-direction: column;
  display: flex;
  text-align: center;

  &:hover {
    color: ${colors.six};
  }
`;

export const Cross = styled.svg`
  margin-bottom: 20em;
  margin-left: 2em;
`;
