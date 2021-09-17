import React, {useContext} from 'react'
import '../styles/navbar.css'
import {Button, Popup} from "semantic-ui-react"
import {UserProfileContext} from "../context/userprofile/UserProfileContext"


export const DropdownNavigator = () => {
  const { setUserProfile } = useContext(UserProfileContext)

  return (
    <div className={'user-profile-button'}>
      <Popup on={'click'}
             trigger={<Button circular
                              color={'blue'}
                              size={'large'}
                              icon={'user secret'}/>}
             content={<Button.Group vertical>
                        <Button content={'Profile'}/>
                        <Button content={'Log out'}
                               onClick={() => setUserProfile(null)}/>
                      </Button.Group>}
      />
    </div>
  )
}
