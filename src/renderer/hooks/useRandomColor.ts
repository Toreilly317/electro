import * as React from "react";

const randomColor = (): string =>
  "#" +
  Math.random()
    .toString(16)
    .substr(-6);

const useRandomColor = () => {
  const [color, setColor] = React.useState(randomColor());
  const refreshColor = () => {
    setColor(randomColor());
    return color;
  };

  return [color, refreshColor];
};

export default useRandomColor;
