import React, {useState} from 'react'
import {Form, Input} from 'semantic-ui-react'
import {Route} from "../context/triddys-router/RouterProvider"
import '../styles/dd-home.css'

type Props = {
  setRoute: (route: Route) => void
}

export const Login = ({setRoute}: Props) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    setRoute(Route.HOME)
  }

  return (
    <div className={'dota-duos-home-container'}>
      <Form>
        <Form.Field>
          <Input placeholder={'username'}
                 icon={'user secret'}
                 iconPosition={'left'}
                 value={username}
                 onChange={(e, data) => setUsername(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Input placeholder={'password'}
                 icon={'lock'}
                 iconPosition={'left'}
                 value={password}
                 onChange={(e, data) => setPassword(data.value)}
          />
        </Form.Field>
        <Form.Button content={'Submit'}
                     color={'blue'}
                     onClick={handleSubmit}
        />
      </Form>
    </div>
  )
}
