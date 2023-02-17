import styled from "styled-components";
import { colors } from "./Theme";
import BG from "../assets/bg-pattern.jpg";

export const Box = styled.div`
  background-image: url(${BG});
  width: auto;
  height: auto;
  overflow: hidden;
`;

export const Box2 = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

export const Box3 = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;

  @media (min-width: 360px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 776px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const I = styled.img`
  width: 10%;
  height: auto;
  margin-right: 1rem;

  @media (min-width: 360px) {
    width: 10%;
    height: auto;
  }

  @media (min-width: 776px) {
    width: 6%;
    height: auto;
  }

  @media (min-width: 992px) {
    width: 3%;
    height: auto;
  }

  @media (min-width: 1200px) {
    width: 6%;
    height: auto;
  }
  @media (min-width: 1024px) {
    width: 5%;
    height: auto;
  }
  @media (min-width: 1280px) {
    width: 3%;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: ${colors.six};
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const BoxBtn = styled.div`
  display: flex;
  margin: 1rem;
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

export const Box4 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;

  @media (min-width: 776px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: auto;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: auto;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin: auto;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  width: 80%;
  height: auto;
  border-radius: 1rem;
  margin: auto;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 776px) {
    width: 65%;
    height: auto;
    border-radius: 1rem;
    margin: auto;
  }
  @media (min-width: 992px) {
    width: 60%;
    height: auto;
    border-radius: 1rem;
    margin: auto;
  }
  @media (min-width: 1200px) {
    width: 80%;
    height: auto;
    border-radius: 1rem;
    margin: auto;
  }
`;

export const TitleImg = styled.h3`
  color: ${colors.six};
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Text = styled.h4`
  color: ${colors.six};
  text-align: center;
  font-size: 1rem;
  display: block;

  @media (min-width: 776px) {
    width: 60%;
    margin: auto;
  }

  @media (min-width: 992px) {
    width: 60%;
    margin: auto;
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin: auto;
  }
`;

export const Price = styled.h5`
  color: ${colors.ten};
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: large;
`;
