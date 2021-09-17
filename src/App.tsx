import * as React from 'react';
import {useContext} from 'react'
import {RouterContext} from "./context/triddys-router/RouterContext"
import {Route} from "./context/triddys-router/RouterProvider"
import {DDHome} from "./components/DDHome"
import {Login} from "./components/Login"
import {NavBar} from "./components/NavBar"
import {UserProfileContext} from "./context/userprofile/UserProfileContext"

export const App = () => {
  const { route, setRoute } = useContext(RouterContext)
  const { userProfile, setUserProfile } = useContext(UserProfileContext)

  const changeRoute = () => {
    switch(route) {
      case Route.HOME: return <DDHome setRoute={setRoute} userProfile={userProfile}/>
      case Route.LOGIN: return <Login setRoute={setRoute} setUserProfile={setUserProfile}/>
    }
  }

  return (
    <div>
      <NavBar setRoute={setRoute} userProfile={userProfile}/>
      { changeRoute() }
    </div>
  );
}
