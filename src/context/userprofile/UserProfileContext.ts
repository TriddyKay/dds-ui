import React from "react";
import {UserProfile} from "../../domain/UserProfile"

export type UserProfileContextType = {
  userProfile: UserProfile | null,
  setUserProfile: (userProfile: UserProfile | null) => void
}

export const UserProfileContext = React.createContext<UserProfileContextType>({
  userProfile: null,
  setUserProfile: () => undefined
});
