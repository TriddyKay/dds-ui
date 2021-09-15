import React, {useState} from 'react'
import {RouterContext} from './RouterContext'

export enum Route {
  HOME = 'home',
  LOGIN = 'login'
}

export const RouterProvider: React.FC = ({children}) => {
  const [route, setRoute] = useState<Route>(Route.HOME)

  const toggleRoute = (route: Route) => {
    setRoute(route)
  }

  return (
    <RouterContext.Provider value={{route: route, setRoute: toggleRoute}}>
      {children}
    </RouterContext.Provider>
  )
}
