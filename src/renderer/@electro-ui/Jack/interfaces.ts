export interface IJackStyleProps {
  background?: string;
  color?: string;
  cableColor?: string;
}

export interface IJackProps extends IJackStyleProps {
  name: string;
  Component?: any;
  onSelect?: () => any;
  onConnect?: () => any;
  onDisconnect?: () => any;
}
