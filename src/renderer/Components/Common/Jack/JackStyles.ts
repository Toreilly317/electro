import styled from "styled-components";
import { IJackStyleProps } from "./interfaces";

export const JackStyles = styled.div<IJackStyleProps>`
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  color: ${(props) => props.color};
  display: inline-flex;
  flex-direction: column;
  font-size: rem;
  margin: 0.2rem;
  padding: 0.2rem;
  & .plug {
    background: ${(props) => (props.cableColor ? props.cableColor : "white")};
    border-radius: 100%;
    border: 2px solid black;
    height: 1.2rem;
    width: 1.2rem;
    margin: 4px;
  }

  & .plug:hover {
    background: ${(props) => props.cableColor};
  }
`;
