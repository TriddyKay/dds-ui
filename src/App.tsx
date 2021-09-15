import * as React from 'react';
import { useContext } from 'react';
import {RouterContext} from "./context/triddys-router/RouterContext"
import {Route} from "./context/triddys-router/RouterProvider"
import {DDHome} from "./components/DDHome"
import {Login} from "./components/Login"
import {NavBar} from "./components/NavBar"

export const App = () => {
  const { route, setRoute } = useContext(RouterContext)

  const changeRoute = () => {
    switch(route) {
      case Route.HOME: return <DDHome setRoute={setRoute}/>
      case Route.LOGIN: return <Login setRoute={setRoute}/>
    }
  }

  return (
    <div>
      <NavBar />
      { changeRoute() }
    </div>
  );
}
