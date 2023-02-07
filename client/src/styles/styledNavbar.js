import styled from "styled-components";
import { colors } from "./Theme";

export const Nav = styled.nav`
  background-color: ${colors.one};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
  overflow-x: hidden;
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
    margin-right: 5em;
  }

  @media (min-width: 1920px) {
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
  color: ${colors.six};
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;

  &:hover {
    color: ${colors.ten};
  }

  @media (min-width: 360px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
    padding: 1rem;
    font-size: 1rem;
    margin-left: 1rem;
  }

  @media (min-width: 1200px) {
    display: block;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }
`;

export const B = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  color: ${colors.six};
  flex-direction: row;
  margin-top: 12px;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${colors.ten};
  }
`;

export const Logo = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 5px;
  border-radius: 50px;
`;

export const SPAN = styled.span`
  display: flex;
  font-weight: 600;
  font-size: 1.5rem;
  justify-content: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }
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
  background-color: ${colors.one};
  justify-content: space-between;
  display: flex;
  border-radius: 1rem;
`;

export const AB = styled.a`
  text-decoration: none;
  color: ${colors.six};
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  margin-left: 1rem;
  flex-direction: column;
  display: flex;
  text-align: justify;

  &:hover {
    color: ${colors.ten};
  }
`;

export const Cross = styled.svg`
  padding-bottom: 40em;
  padding-left: 1em;
  color: ${colors.six};
  display: flex;
  border: none;

  &:hover {
    color: ${colors.ten};
  }
`;

export const Bars = styled.svg`
  color: ${colors.six};

  &:hover {
    color: ${colors.ten};
  }
`;
