import * as React from "react";
import sprite from "./spriteSheet.svg";
import { IconType } from "./types";

export const Icon: React.FC<{ icon: IconType }> = ({ icon }) => (
  <svg className="drum-icon">
    <use href={`${sprite}#${icon}`} />
  </svg>
);
