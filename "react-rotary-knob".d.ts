declare module "react-rotary-knob" {
    export interface KnobProps {
        min: number;
        max: number;
        value?: number;
        onChange?(value: number): void;
        infinite?: boolean;

    }

    export default class extends React.Component<KnobProps> {
    }
}
