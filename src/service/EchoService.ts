import Axios from 'axios'

export const EchoService = {

  getEcho: (): Promise<string> => {
    return Axios.get('http://localhost:8442/echo')
      .then(response => response.data)
      .catch(e => console.error('ERROR!: ', e))
  }
}
