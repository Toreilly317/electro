import * as React from "react";

export const useOnMount = (func: any) => {
  React.useEffect(() => {
    func();
  }, []);
};

export const useOnUnmount = func => {
  React.useEffect(() => {
    return () => func();
  }, []);
};
