import * as React from "react";

export class PureCanvas extends React.Component<{ contextRef: any }> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width="300"
        height="300"
        ref={(node) =>
          node ? this.props.contextRef(node.getContext("2d")) : null
        }
      />
    );
  }
}
