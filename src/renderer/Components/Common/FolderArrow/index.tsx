import * as React from "react";

export const FolderArrow: React.FC<{ isUp: boolean }> = ({ isUp }) => {
  if (isUp) {
    return <span style={{ padding: "5px" }}>&#9662;</span>;
  } else {
    return <span style={{ padding: "5px" }}>&#9658;</span>;
  }
};
