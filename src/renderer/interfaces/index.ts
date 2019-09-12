export interface IRangeInput {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  min?: number;
  max?: number;
  step?: number;
}

/* OSCILLATOR */
export interface useOscillatorArgs {
  frequency: number;
  detune: number;
  type: "sine" | "triangle" | "sawtooth" | "square";
}

export interface OscillatorComponent extends useOscillatorArgs {
  oscillator: OscillatorNode;
  frequency: number;
  detune: number;
  setFrequency: (frequency: number) => void;
  setDetune: (detuneValue: number) => void;
}

/* GAIN */
export interface useGainArgs {
  volume: number;
  connectedToMaster?: boolean;
}

export interface GainComponent {
  mute: any;
  gainLevel: number;
  setGainLevel: (gainValue: number) => void;
  gainNode: GainNode;
}

/* SYNTH */
export interface useSynthArgs {
  oscillator: useOscillatorArgs;
  gain: useGainArgs;
}

export interface Synth extends OscillatorComponent, GainComponent {}
