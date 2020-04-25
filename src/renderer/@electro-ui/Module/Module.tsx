import * as React from "react";
import { ModuleStyles, Screws } from "./ModuleStyles";

export const Module: React.FC<{ name: string }> = ({ children, name }) => {
  return (
    <ModuleStyles>
      <Screws />
      <div className="name">{name}</div>
      <div className="content">{children}</div>
      <Screws />
    </ModuleStyles>
  );
};
