import {DependencyList, useEffect} from "react"

export const useAsyncEffect = (fn: () => Promise<any>, deps: DependencyList) => {
  // eslint-disable-next-line
  useEffect(() => { fn()} , deps )
}
