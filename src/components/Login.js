import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { useState, useEffect } from 'react'
//import { setNotification } from '../reducers/notificationReducer'
import { setLogin } from '../reducers/loginReducer'
import LoginForm from './LoginForm'
import blogService from '../services/blogs'
// import loginService from '../services/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState(null)
  // const [errorMessage, setErrorMessage] = useState(null)
  // const [loginVisible, setLoginVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      dispatch(setLogin(user))
      blogService.setToken(user.token)
    }
  })

  const user = useSelector(({user}) => {
    return user
  })

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = {
      username,
      password
    }
    // try
    // {
    //   const user = await loginService.login({
    //     username, password,
    //   })
    //   window.localStorage.setItem(
    //     'loggedNoteappUser', JSON.stringify(user)
    //   )
      // blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user))
      console.log(user);
      dispatch(setLogin(user))
      // setUser(user)
      setUsername('')
      setPassword('')
    }
    // catch (exception) {
      // setErrorMessage('wrong credentials')
      // setTimeout(() => {
      //   setErrorMessage(null)
      // }, 5000)
    // }
  // }

  // const loginForm = () => {
    // const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    // const showWhenVisible = { display: loginVisible ? '' : 'none' }
    return (
      <div>
        {/* <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div> */}
        {/* <div style={showWhenVisible}> */}
        <p>{user.username} logged in</p>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          {/* <button onClick={() => setLoginVisible(false)}>cancel</button> */}
        {/* </div> */}
      </div>
    )
  // }
}

export default Login