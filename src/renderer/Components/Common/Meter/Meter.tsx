import * as React from "react";
import { Canvas } from "./Canvas";

export class Meter extends React.Component<
  { onUpdate: () => number },
  { volume: number }
> {
  rAF: number;
  constructor(props: any) {
    super(props);
    this.state = { volume: 0 };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  //This acts as the update function within a game loop
  updateAnimationState = () => {
    this.setState({ volume: this.props.onUpdate() });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  };

  //stop callback on unmount
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas volume={this.state.volume} />;
  }
}
