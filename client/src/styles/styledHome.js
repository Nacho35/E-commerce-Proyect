import styled from "styled-components";
import { colors } from "./Theme";
import Food from "../assets/bg-header.png";

export const Box = styled.div`
  display: flex;
  width: auto;
  height: 100ch;
  background-image: url(${Food});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow-x: hidden;

  @media (min-width: 360px) {
    background-attachment: scroll;
  }
  @media (min-width: 776px) {
    background-attachment: scroll;
  }
  @media (min-width: 992px) {
    background-attachment: scroll;
  }
  @media (min-width: 1200px) {
    background-attachment: fixed;
  }
`;

export const Box2 = styled.div`
  display: flex;
`;

export const Box3 = styled.div`
  display: block;
  margin: auto;
  margin-top: auto;
  margin-left: 1rem;
`;

export const Title = styled.h1`
  text-align: left;
  color: ${colors.six};
  font-size: 5rem;
`;

export const SPAN = styled.span`
  display: flex;
`;

export const BoxP = styled.div`
  display: block;
  margin: auto;
`;

export const Text = styled.p`
  color: ${colors.six};
  font-size: 1rem;
  display: block;
  text-align: start;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    width: 5%;
    text-align: justify;
  }

  @media (min-width: 992px) {
    width: 30%;
  }

  @media (min-width: 776px) {
    width: 50%;
  }
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
