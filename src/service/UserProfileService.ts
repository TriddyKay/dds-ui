import Axios from 'axios'
import {UserProfile} from "../domain/UserProfile"

export const UserProfileService = {

  getUserProfile: (username: string): Promise<UserProfile> => {
    return Axios.get(`http://localhost:8447/user-profile/username/${username}`)
      .then(response => response.data)
      .catch(e => console.error('ERROR!: ', e))
  }
}
