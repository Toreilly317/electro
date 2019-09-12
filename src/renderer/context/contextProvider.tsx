import * as React from "react"

const ElectroContext = React.createContext({
  createInstrument: (name: string) => {
    console.log(name)
  }
})

interface ComposerArgs {
  contexts: [any]
  children: any
}

function ProviderComposer({ contexts, children }: ComposerArgs) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  )
}

const ContextProvider: React.FC = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[<ElectroContext.Provider value={ElectroContext} />]}
    >
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
