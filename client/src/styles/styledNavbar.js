import styled from "styled-components";
import { colors } from "./Theme";
import { animated } from "@react-spring/web";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${colors.one};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
  overflow-x: hidden;
  top: 0;
  position: fixed;
  z-index: 9999;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Box1 = styled.div`
  display: flex;
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

export const Links = styled(NavLink)`
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
    font-size: 1.2rem;
  }
`;

export const B = styled(NavLink)`
  text-decoration: none;
  display: block;
  text-align: center;
  color: ${colors.six};
  flex-direction: row;
  font-weight: 600;
  margin: auto;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${colors.ten};
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: auto;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
`;

export const SPAN = styled.span`
  display: flex;
  font-weight: 600;
  font-size: 1.2rem;
  justify-content: center;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
`;

export const Btn = styled(animated.button)`
  background-color: ${colors.ten};
  border-radius: 10px;
  border: solid;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: auto;

  @media (orientation: landscape) {
    display: flex;
    justify-content: center;
    margin-bottom: auto;
  }

  @media (min-width: 992px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Boxburguer1 = styled.div`
  display: flex;
  justify-items: center;
  margin: 10px;
`;

export const Boxburguer2 = styled(animated.div)`
  background-color: ${colors.one};
  position: static;
  height: auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const AB = styled(animated(NavLink))`
  text-decoration: none;
  color: ${colors.six};
  margin: 1.2rem;
  font-size: 3em;
  font-weight: 600;
  display: flex;
  text-align: start;

  &:hover {
    color: ${colors.ten};
  }

  @media (min-width: 360px) {
    margin-left: auto;
    margin-right: auto;
    @media (orientation: landscape) {
      font-size: 1.8em;
      margin-top: auto;
      margin-right: 1.5rem;
    }
  }
`;

export const Cross = styled.svg`
  color: ${colors.one};
  background-color: transparent;
  border-radius: 10px;
  border: solid;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${colors.six};
  }
`;

export const Bars = styled.svg`
  color: ${colors.one};

  &:hover {
    color: ${colors.six};
  }
`;
