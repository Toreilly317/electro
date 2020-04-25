import * as React from "react";

const initialValue = {
  createInstrument: (name: string) => {
    console.log(name);
  },
};

const Context = React.createContext(initialValue);

interface ComposerArgs {
  contexts: [any];
  children: any;
}

function ProviderComposer({ contexts, children }: ComposerArgs) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

const ContextProvider: React.FC = ({ children }) => {
  return (
    <ProviderComposer contexts={[<Context.Provider value={initialValue} />]}>
      {children}
    </ProviderComposer>
  );
};

export { ContextProvider };
