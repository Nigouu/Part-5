import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Error'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  // const [newBlogTitle, setNewBlogTitle] = useState('')
  // const [newBlogAuthor, setNewBlogAuthor] = useState('')
  // const [newBlogUrl, setNewBlogUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState('')
  const [loginVisible, setLoginVisible] = useState(false)
  const blogFormRef = useRef()


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
      })
  }

  const blogForm = () => (
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
      <BlogForm createBlog={addBlog} />
    </Togglable>
  )

  // const addBlog = async (event) => {
  //   event.preventDefault()
  //   const blogObject = await blogService.create ({
  //     title: newBlogTitle,
  //     author: newBlogAuthor,
  //     url: newBlogUrl,
  //   })
  //   setBlogs(blogs.concat(blogObject))
  //   setType('notification')
  //   setErrorMessage(`${newBlogTitle} by ${newBlogAuthor} was added`)
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   setNewBlogTitle('')
  //   setNewBlogAuthor('')
  //   setNewBlogUrl('')
  // }


  // const handleBlogTitleChange = (event) => {
  //   console.log(event.target.value)
  //   setNewBlogTitle(event.target.value)
  // }


  // const handleBlogAuthorChange = (event) => {
  //   console.log(event.target.value)
  //   setNewBlogAuthor(event.target.value)
  // }


  // const handleBlogUrlChange = (event) => {
  //   console.log(event.target.value)
  //   setNewBlogUrl(event.target.value)
  // }


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
      setUser(user)
      setUsername('')
      setPassword('')
    } 
    catch (exception) {
      setType('error')
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // const loginForm = () => (
  //   <form onSubmit={handleLogin}>
  //     <div>
  //     <Notification message={errorMessage} type= {type}/>
  //       username
  //         <input
  //         type="text"
  //         value={username}
  //         name="Username"
  //         onChange={({ target }) => setUsername(target.value)}
  //       />
  //     </div>
  //     <div>
  //       password
  //         <input
  //         type="password"
  //         value={password}
  //         name="Password"
  //         onChange={({ target }) => setPassword(target.value)}
  //       />
  //     </div>
  //     <button type="submit">login</button>
  //   </form>      
  // )


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


  // const blogForm = () => (
  //   <form onSubmit={addBlog}>
  //     <div>
  //     <Notification message={errorMessage} type= {type}/>
  //     title: <input value={newBlogTitle} onChange={handleBlogTitleChange}/> <br/>
  //     author: <input value={newBlogAuthor} onChange={handleBlogAuthorChange}/> <br/>
  //     url: <input value={newBlogUrl} onChange={handleBlogUrlChange}/> <br/>
  //     <button type="submit">create</button>
  //     </div>
  //   </form>  
  // )

  // const blogForm = () => (
  //   <Togglable buttonLabel="new blog">
  //     <BlogForm
  //       onSubmit={addBlog}
  //       value1={newBlogTitle}
  //       handleChange1={handleBlogTitleChange}
  //       value2={newBlogAuthor}
  //       handleChange2={handleBlogAuthorChange}
  //       value3={newBlogUrl}
  //       handleChange3={handleBlogUrlChange}
  //     />
  //   </Togglable>
  // )


  return (
    // <div>
    //   <h2>blogs</h2>
    //   {user === null ?
    //   loginForm() :
    //   <div>
    //     <p>{user.name} logged-in</p>
    //     <h2>blogs</h2>
    //       {BlogForm()}
    //       {blogs.map(blog =>
    //         <Blog key={blog.id} blog={blog} />
    //       )}
    //   </div>
    // }
    // </div>

    <div>
      <h1>Blogs</h1>
      <Notification message={errorMessage} />
      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} logged in</p>
          {blogForm()}
        </div>
        }
      <div>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
      </div>
    </div>
    
  )
}

export default App