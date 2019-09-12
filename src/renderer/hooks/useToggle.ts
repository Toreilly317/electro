import * as React from "react";

const useToggle = (bool: boolean) => {
  const [toggle, setToggle] = React.useState(bool);
  const flipToggle = () => setToggle(!toggle);
  return [toggle, flipToggle];
};

export default useToggle;
