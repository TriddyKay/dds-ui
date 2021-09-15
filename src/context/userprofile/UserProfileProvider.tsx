import React, {useState} from 'react'
import {UserProfileContext} from './UserProfileContext'
import {UserProfile} from "../../domain/UserProfile"

export const UserProfileProvider: React.FC = ({children}) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  const signInUser = (userProfile: UserProfile) => {
    setUserProfile(userProfile)
  }

  return (
    <UserProfileContext.Provider value={{userProfile: userProfile, setUserProfile: signInUser}}>
      {children}
    </UserProfileContext.Provider>
  )
}
