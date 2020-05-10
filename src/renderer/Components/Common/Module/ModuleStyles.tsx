import * as React from "react";
import styled from "styled-components";

function numberInRange(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ModuleStyles = styled.div`
  background: #e6e6e6;
  border: 1px solid black;
  font-size: 1.2rem;
  padding: 2px;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .screws {
    align-self: flex-bottom;
    display: flex;
    justify-content: space-between;
  }

  & .name {
    padding: 1rem;
    text-align: center;
    font-weight: bold;
  }
  margin-bottom: 1rem;
`;

const Screw = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  background: gray;
  color: black;
  transform: rotate(15deg);
`;

export const Screws: React.FC = () => {
  return (
    <div className="screws">
      <Screw>+</Screw>
      <Screw>+</Screw>
    </div>
  );
};
