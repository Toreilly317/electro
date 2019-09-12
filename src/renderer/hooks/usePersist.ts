import * as React from "react";

const usePersist = val => {
  const value = React.useRef(val);
  return value.current;
};

export default usePersist;
