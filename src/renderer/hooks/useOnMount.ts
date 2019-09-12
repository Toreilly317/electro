import * as React from "react"

const useOnMount = func => {
  React.useEffect(() => {
    func()
  }, [])
}

export default useOnMount
