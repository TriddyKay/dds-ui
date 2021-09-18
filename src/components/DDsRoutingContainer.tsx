import React, {useContext} from 'react'
import {RouterContext} from "../context/triddys-router/RouterContext"
import {UserProfileContext} from "../context/userprofile/UserProfileContext"
import {Route} from "../context/triddys-router/RouterProvider"
import {DDHome} from "./DDHome"
import {Login} from "./Login"
import {NavBar} from "./NavBar"
import {HeroesDisplay} from "./DisplayHeroes"

export const DDsRoutingContainer = () => {
  const { route, setRoute } = useContext(RouterContext)
  const { userProfile, setUserProfile } = useContext(UserProfileContext)

  const changeRoute = () => {
    switch(route) {
      case Route.HOME: return <DDHome setRoute={setRoute} userProfile={userProfile}/>
      case Route.LOGIN: return <Login setRoute={setRoute} setUserProfile={setUserProfile}/>
      case Route.HEROES: return <HeroesDisplay/>
    }
  }

  console.log('route', route)
  return (
    <div>
      <NavBar setRoute={setRoute} userProfile={userProfile}/>
      { changeRoute() }
    </div>
  );
}
