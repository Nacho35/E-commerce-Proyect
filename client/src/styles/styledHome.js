import styled from "styled-components";
import { colors } from "./Theme";
import Food from "../assets/bg-header.png";

export const Box = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  background-image: url(${Food});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow-x: hidden;
`;

export const Box2 = styled.div`
  display: flex;
`;

export const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 6rem;
`;

export const Title = styled.h1`
  text-align: left;
  color: ${colors.six};
  font-size: 5rem;
`;

export const SPAN = styled.span`
  display: flex;
`;

export const Text = styled.p`
  color: ${colors.six};
  font-size: 1rem;
  display: flex;
  text-align: justify;
  margin-bottom: 2rem;
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
