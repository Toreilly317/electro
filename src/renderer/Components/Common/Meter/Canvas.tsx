import * as React from "react";

import { PureCanvas } from "./PureCanvas";

export class Canvas extends React.Component<{ volume: number }> {
  ctx: CanvasRenderingContext2D;
  constructor(props: { volume: number }) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
  }

  saveContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  componentDidUpdate() {
    const { volume } = this.props;
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    //this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, width, height);

    this.ctx.fillStyle = "#4397AC";
    this.ctx.fillRect(
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2,
      25,
      volume
    );
    console.log(volume);
    //this.ctx.restore();
  }

  render() {
    return <PureCanvas contextRef={this.saveContext}></PureCanvas>;
  }
}
