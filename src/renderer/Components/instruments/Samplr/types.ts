import { MidiNote, Note } from "tone/build/esm/core/type/Units";

export type ToneMidiNote = MidiNote
export type ToneNote = Note

export interface Sample {
  midiTrigger: ToneMidiNote;
  name: string;
  noteTrigger: ToneNote;
  waveformData?: any;
  fftData?: any;
}
export interface SampleBank {
  [key: string]: Sample;
}
export interface PadBankProps {
  count?: number;
  onPadClick: (padData: IPad) => void;
  selectedPad: string;
}
export interface PadProps {
  onClick: (padId: string) => void;
  disabled?: boolean;
  selected: boolean;
  midiNote: number;
}
export interface IPad {
  id: string;
  midiNote: ToneMidiNote;
  number: number;
  note: ToneNote;
}
