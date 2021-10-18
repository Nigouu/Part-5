import React, { useState, useEffect, 
  // useRef 
} from 'react'
import Notification from './components/Error'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
// import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import UserInfo from './components/UserInfo'
import IndividualUserInfo from './components/IndividualUserInfo'
import { setLogin } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setLogin(user))
      // setUser(user)
      blogService.setToken(user.token)
    }
  }, [dispatch])

  const user = useSelector(({user}) => {
    return user
  })

  const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link to='/' style={padding} >Blogs</Link>
        <Link to='/create' style={padding}>Create New</Link>
        <Link to='/users' style={padding}>Users</Link>
      </div>
    )
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try
    {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      dispatch(setLogin(user))
      // setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
    }
  }

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }
    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Router>
        <h1>Blogs</h1>
        {user === null ? loginForm() :
          <div>
            <p>{user.name} logged in</p>
          </div>
        }
        <Menu />
        <Notification/>
        <Switch>
          <Route path='/create'>
            <BlogForm/>
          </Route>
          <Route path='/user'>
            <IndividualUserInfo/>
          </Route>
          <Route path='/users'>
            <UserInfo/>
          </Route>
          <Route path='/blog' >
            <Blog/>
          </Route>
          <Route path="/">
            <BlogList/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App