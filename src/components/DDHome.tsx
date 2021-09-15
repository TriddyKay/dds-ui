import React from 'react'
import {Button} from "semantic-ui-react"
import '../styles/dd-home.css'
import {Route} from "../context/triddys-router/RouterProvider"
import {UserProfile} from "../domain/UserProfile"

type Props = {
  setRoute: (route: Route) => void
  userProfile: UserProfile | null
}

export const DDHome = ({setRoute, userProfile}: Props) => {

  return (
    <React.Fragment>
      <div className={'dota-duos-home-container'}>
        {userProfile &&
        <div className={'play-button-container'}>
          <Button color={'blue'}
                  className={'play_button'}
                  size={'large'}
                  content={'P L A Y'}/>
        </div>
        }
        {!userProfile &&
        <Button color={'blue'}
                onClick={() => setRoute(Route.LOGIN)}>
          S&nbsp;&nbsp;I&nbsp;&nbsp;G&nbsp;&nbsp;N
          &nbsp;&nbsp;&nbsp;&nbsp;
          I&nbsp;&nbsp;N
        </Button>
        }
      </div>
    </React.Fragment>
  )
}
