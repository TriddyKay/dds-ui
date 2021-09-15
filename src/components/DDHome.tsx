import React from 'react'
import {Button} from "semantic-ui-react"
import '../styles/dd-home.css'
import {Route} from "../context/triddys-router/RouterProvider"

type Props = {
  setRoute: (route: Route) => void
}

export const DDHome = ({setRoute}: Props) => {

  return (
    <React.Fragment>
      <div className={'dota-duos-home-container'}>
        <div className={'play-button-container'}>
          <Button color={'blue'}
                  className={'play_button'}
                  // onClick={() => setRoute(Route.LOGIN)}
                  size={'large'}
                  content={'P L A Y'}/>
        </div>
      </div>
    </React.Fragment>
  )
}
