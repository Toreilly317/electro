import * as React from "react";
import { JackStyles } from "./JackStyles";
import { IJackProps } from "./interfaces";

export const Jack: React.FC<IJackProps> = ({
  background = "black",
  color = "white",
  name,
  cableColor,
  Component,
  onConnect,
  onSelect,
}) => {
  // const { handleJackSelect, cableColor } = React.useContext(StoreContext);

  const handleSelectJack = () => {
    // handleJackSelect({ name, isInput: input, component });
  };

  if (Component) {
    return <Component />;
  }

  return (
    <JackStyles background={background} color={color} cableColor={cableColor}>
      <div>{name}</div>
      <div className="plug" onClick={handleSelectJack} />
    </JackStyles>
  );
};

export default Jack;
