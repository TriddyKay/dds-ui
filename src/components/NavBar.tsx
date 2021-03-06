import React from 'react'
import '../styles/navbar.css'
import {Route} from "../context/triddys-router/RouterProvider"
import {Button} from "semantic-ui-react"
import {UserProfile} from "../domain/UserProfile"
import {DropdownNavigator} from "./DropdownNavigator"

type Props = {
  setRoute: (route: Route) => void
  userProfile: UserProfile | null
}

export const NavBar = ({setRoute, userProfile}: Props) => {
  return (
    <div className={'navbar'}>
      {!userProfile &&
      <React.Fragment>
        <Button color={'blue'}
                className={'signin-signup-button'}
                onClick={() => setRoute(Route.LOGIN)}>
          sign in
        </Button>
        <Button color={'blue'}
                className={'signin-signup-button'}
                onClick={() => setRoute(Route.SIGNUP)}>
          sign up
        </Button>
      </React.Fragment>}
      {userProfile &&
      <React.Fragment>
        <DropdownNavigator />
        <div>
          <Button className={'trids-button'}
                  onClick={() => setRoute(Route.HOME)}
                  inverted
                  content={'Home'}
                  color={'blue'}/>
          <Button className={'trids-button'}
                  onClick={() => setRoute(Route.HEROES)}
                  inverted
                  content={'Heroes'}
                  color={'blue'}/>
        </div>
      </React.Fragment>}
    </div>
  )
}
