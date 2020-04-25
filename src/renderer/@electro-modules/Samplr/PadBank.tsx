import * as React from "react";
import styled from "styled-components";
import * as uuid from "uuid";
import { PadBankProps, PadProps, IPad } from "./types";
import { Frequency } from "tone";

const midiToNote = (midi: number) => {
  if (midi > 127 || midi < 0) {
    throw new Error(`${midi} is out of the midi range`);
  }
  return new Frequency(midi, "midi").toNote();
};

export const PadStyles = styled.button<{ selected: boolean }>`
  background: ${(props) => (props.selected ? "ghostwhite" : "darkslategray")};
  display: flex;
  width: 70px;
  height: 70px;
`;

export const Pad: React.FC<PadProps> = ({ onClick, disabled, selected }) => {
  const [id] = React.useState(uuid.v4());

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <PadStyles
      selected={selected}
      disabled={disabled}
      onClick={handleOnClick}
    />
  );
};

const createEmptyBank = (count: number) => {
  const bottomCNote = 48;
  const bank: IPad[] = [];
  for (let index = 0; index < count; index++) {
    bank[index] = {
      id: uuid.v4(),
      number: index,
      midiNote: bottomCNote + index,
      note: midiToNote(bottomCNote + index),
    };
  }
  return bank;
};

const PadBank: React.FC<PadBankProps> = ({
  selectedPad,
  count = 16,
  onPadClick,
}) => {
  const [pads] = React.useState(createEmptyBank(count));

  const handlePadClick = (pad: IPad) => onPadClick(pad);

  return (
    <>
      {pads.map((pad, i) => (
        <Pad
          midiNote={136 + i}
          key={pad.id}
          onClick={() => handlePadClick(pad)}
          selected={selectedPad === pad.id}
        />
      ))}
    </>
  );
};

export default PadBank;
