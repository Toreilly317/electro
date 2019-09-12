import * as React from "react";
import useRandomColor from "../hooks/useRandomColor";

interface JackInfo {
  name: string;
  isInput: boolean;
  color?: string;
  component: AudioNode;
}

const useJackConnection = () => {
  //cable selections
  const [firstJack, setFirstJack] = React.useState(null);
  const [secondJack, setSecondJack] = React.useState(null);

  //handle colors of plugs
  const [color, refreshColor] = useRandomColor();

  //handle connection when there are two jacks selected
  const connectJacks = () => {
    console.log(firstJack, secondJack);
  };

  const handleJackSelect = (selectedJack: JackInfo) => {
    //handle no previous cable
    if (firstJack === null || firstJack.isInput === selectedJack.isInput) {
      console.log("First Jack", selectedJack);
      setFirstJack(selectedJack);
      return firstJack;
    } else {
      console.log(firstJack.component.channelCountMode);
      console.log(selectedJack.component.channelCountMode);
      console.log(firstJack, selectedJack);
      firstJack.component.connect(selectedJack.component);

      // setSecondJack(selectedJack);
    }
  };

  return {
    color,
    handleJackSelect,
    refreshColor
  };
};

export default useJackConnection;
