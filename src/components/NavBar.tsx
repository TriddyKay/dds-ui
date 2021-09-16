import React from 'react'
import '../styles/navbar.css'
import {Route} from "../context/triddys-router/RouterProvider"
import {Button} from "semantic-ui-react"

type Props = {
  setRoute: (route: Route) => void
}

export const NavBar = ({setRoute}: Props) => {
  return (
    <div className={'navbar'}>
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
    </div>
  )
}
