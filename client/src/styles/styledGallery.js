import styled from "styled-components";
import { colors } from "./Theme";

export const Box = styled.div`
  width: auto;
  height: auto;
  background-color: ${colors.one};
  overflow-x: hidden;
`;

export const Box2 = styled.div`
  display: block;
  align-items: center;
  padding-top: 2rem;
`;

export const BoxP = styled.div`
  display: flex;
  margin: auto;

  @media (min-width: 1200px) {
    width: 50%;
    display: flex;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 60%;
    display: flex;
    margin: auto;
  }

  @media (min-width: 992px) {
    width: 70%;
    display: flex;
    margin: auto;
  }

  @media (min-width: 776px) {
    width: 70%;
    display: flex;
    margin: auto;
  }
`;

export const BoxT = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${colors.six};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.7rem;
  display: block;
`;

export const Icon = styled.img`
  width: 6%;
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

export const Text = styled.p`
  color: ${colors.six};
  text-align: center;
  font-size: 1rem;
  display: block;
`;

export const BoxG = styled.div`
  display: flex;
`;

export const Pic = styled.img`
  width: 80%;
  height: auto;
  border-radius: 1rem;
  margin: auto;
`;

export const TitlePic = styled.h3`
  color: ${colors.six};
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const Price = styled.h3`
  color: ${colors.ten};
  display: flex;
  justify-content: center;
  font-weight: 900;
`;
