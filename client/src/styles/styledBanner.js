import styled from "styled-components";
import { colors } from "./Theme";
import Pizza from "../assets/bg-offer.png";

export const Box = styled.div`
  display: flex;
  width: auto;
  height: 40ch;
  background-image: url(${Pizza});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

export const Box2 = styled.div`
  margin: auto;

  @media (min-width: 360px) {
    margin-left: 1rem;
  }

  @media (min-width: 776px) {
    margin-left: 4rem;
  }

  @media (min-width: 992px) {
    margin: 4rem;
  }

  @media (min-width: 1200px) {
    margin: 5rem;
  }
`;

export const Title = styled.h2`
  color: ${colors.six};
  text-align: center;
  text-transform: uppercase;
  font-size: 2.3rem;

  @media (min-width: 360px) {
    font-size: 1.8rem;
  }

  @media (min-width: 776px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.3rem;
  }
`;

export const SPAN = styled.span`
  display: flex;
`;

export const Btn = styled.a`
  --bg: #ffcc33;
  --hover-bg: #000;
  --hover-text: #fff;
  color: #000;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;

  &:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }

  &:active {
    transform: translate(0);
    box-shadow: none;
  }
`;
