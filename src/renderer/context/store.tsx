import * as React from "react";
import useJackConnection from "../hooks/useJackConnection";
import usePersist from "../hooks/usePersist";

interface CustomWindow extends Window {
  ctx: AudioContext;
}

declare let window: CustomWindow;

interface JackInfo {
  name: string;
  isInput: boolean;
  color?: string;
}

interface StoreContext {
  ctx: AudioContext;
  masterOut: any;
  handleJackSelect?: (selectedJack: JackInfo) => any;
  connections: [];
  cableColor: string;
}

export const StoreContext = React.createContext<Partial<StoreContext>>({
  connections: []
});

export const Provider = ({ children }) => {
  //cable selections
  const { handleJackSelect, color: cableColor } = useJackConnection();
  const ctx = usePersist(new AudioContext());

  return (
    <StoreContext.Provider
      value={{
        handleJackSelect,
        cableColor,
        ctx,
        masterOut: ctx.destination
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
