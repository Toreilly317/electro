export interface Sample {
  midiTrigger: number;
  name: string;
  noteTrigger: string;
}
export interface SampleBank {
  [key: string]: Sample;
}
export interface PadBankProps {
  count?: number
  onPadClick: (padData: IPad) => void
  selectedPad: string
}
export interface PadProps {
  onClick: (padId: string) => void
  disabled?: boolean,
  selected: boolean
  midiNote: number
}
export interface IPad {
  id: string
  midiNote: number
  number: number
  note: string
}