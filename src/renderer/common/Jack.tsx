import * as React from "react";
import styled from "styled-components";
import { StoreContext } from "../context/store";

const JackStyles = styled.div`
  align-items: center;
  background: ${props => (props.input ? "black" : "white")};
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  color: ${props => (props.input ? "white" : "black")};
  display: inline-flex;
  flex-direction: column;
  font-size: 0.7rem;
  margin: 0.2rem;
  padding: 0.2rem;
  & .plug {
    background: ${props => (props.cableColor ? props.cableColor : "white")};
    border-radius: 100%;
    border: 2px solid black;
    height: 3.5mm;
    margin: 4px;
    width: 3.5mm;
  }

  & .plug:hover {
    background: ${props => props.plugColor};
  }
`;

interface Jack {
  input?: boolean;
  output?: boolean;
  name: string;
  component: any;
  onSelect?: () => any;
  onConnect?: () => any;
  onDisconnect?: () => any;
}

const Jack: React.FC<Jack> = ({
  input,
  name,
  component,
  onConnect,
  onSelect
}) => {
  const { handleJackSelect, cableColor } = React.useContext(StoreContext);

  const handleSelectJack = () => {
    handleJackSelect({ name, isInput: input, component });
  };

  return (
    <JackStyles input={input} plugColor={cableColor}>
      <div>{name}</div>
      <div className="plug" onClick={handleSelectJack} />
    </JackStyles>
  );
};

export default Jack;
