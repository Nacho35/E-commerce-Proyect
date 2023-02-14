import styled from "styled-components";
import { colors } from "./Theme";
import Pattern from "../assets/bg-pattern.jpg";

export const Box = styled.div`
  width: auto;
  height: auto;
  background-image: url(${Pattern});
  display: flex;
  overflow-x: hidden;
`;

export const Box2 = styled.div`
  display: flex;
`;

export const Box3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  @media (min-width: 360px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 776px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const Info1 = styled.div`
  display: grid;
  grid-column: 2/3;
  justify-content: center;

  @media (min-width: 360px) {
    display: block;
    justify-content: center;
    margin: auto;
    text-align: center;
  }

  @media (min-width: 776px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const Info2 = styled.div`
  display: grid;
  grid-column: 2/3;
  margin: auto;

  @media (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

export const Info3 = styled.div`
  display: grid;
  grid-column: 2/3;
  padding: 5%;

  @media (min-width: 360px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 776px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  margin: 1.5rem;

  @media (min-width: 360px) {
    width: 4rem;
  }

  @media (min-width: 1200px) {
    width: 4%;
  }
`;

export const SPAN = styled.span`
  text-align: center;
`;

export const H3 = styled.h3`
  color: ${colors.six};
  font-weight: 800;
  text-transform: uppercase;
  font-size: medium;
`;

export const Title = styled.h2`
  color: ${colors.six};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const I = styled.img`
  width: 6%;
  height: auto;

  @media (min-width: 360px) {
    width: 10%;
    height: auto;
  }

  @media (min-width: 776px) {
    width: 6%;
    height: auto;
    margin-right: 1rem;
  }

  @media (min-width: 992px) {
    width: 3%;
    height: auto;
    margin-right: 1rem;
  }

  @media (min-width: 1200px) {
    width: 6%;
    height: auto;
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    width: 5%;
    height: auto;
    margin-right: 1rem;
  }
  @media (min-width: 1280px) {
    width: 3%;
    height: auto;
    margin-right: 1rem;
  }
`;

export const Text = styled.p`
  color: ${colors.six};
  text-align: center;
  font-size: 1rem;
  display: flex;
  margin: auto;

  @media (min-width: 1200px) {
    width: 70%;
    font-size: larger;
  }
`;

export const Vid = styled.video`
  grid-column: 1/2;
`;
