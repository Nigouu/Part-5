import React from 'react'
// import { useSelector } from 'react-redux'
import Notification from './components/Error'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Login from './components/Login'

const App = () => {

  // const user = useSelector(({user}) => {
  //   return user
  // })

  return (
    <div>
      <h1>Blogs</h1>
      <Notification/>
      {/* {user === null ? */}
        <Login/> 
        
        <div>
          {/* <p>{user.username} logged in</p> */}
          <BlogForm/>
        </div>

      <BlogList/>
    </div>
  )
}

export default App