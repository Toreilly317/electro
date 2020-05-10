export interface IRotaryKnob {
  name: string;
  min?: number;
  max?: number;
  value: number;
  onChange: (val: number) => void;
}
