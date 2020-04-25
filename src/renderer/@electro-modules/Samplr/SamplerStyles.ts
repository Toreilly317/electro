import styled from "styled-components";

export const SamplerStyles = styled.div`
  max-height: 100vh;
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
`;

export const PadStyles = styled.button<{ selected: boolean }>`
  background: ${props => props.selected ? "ghostwhite" : "darkslategray"};
  display: flex;
  width: 70px;
  height: 70px;
  
`;

export const SamplerPads = styled.div`
  background: gray;
  display: grid;
  padding: 1rem;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`;
