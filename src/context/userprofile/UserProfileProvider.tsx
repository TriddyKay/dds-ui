import React, {useEffect, useState} from 'react'
import {UserProfileContext} from './UserProfileContext'
import {UserProfile} from "../../domain/UserProfile"

export const UserProfileProvider: React.FC = ({children}) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const localizedUserProfile = localStorage.getItem("userprofile")

    if(localizedUserProfile) {
      setUserProfile(JSON.parse(localizedUserProfile))
    }
  },[])

  useEffect(() => {
   userProfile
     ? localStorage.setItem("userprofile", JSON.stringify(userProfile))
     : localStorage.removeItem("userprofile")
  }, [userProfile])

  const signInUser = (userProfile: UserProfile) => {
    setUserProfile(userProfile)
  }

  return (
    <UserProfileContext.Provider value={{userProfile: userProfile, setUserProfile: signInUser}}>
      {children}
    </UserProfileContext.Provider>
  )
}
