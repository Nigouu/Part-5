import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'


const BlogForm = ({ user }) => {

  const dispatch = useDispatch()
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')

  const handleBlogTitleChange = (event) => {
    console.log(event.target.value)
    setNewBlogTitle(event.target.value)
  }

  const handleBlogAuthorChange = (event) => {
    console.log(event.target.value)
    setNewBlogAuthor(event.target.value)
  }

  const handleBlogUrlChange = (event) => {
    console.log(event.target.value)
    setNewBlogUrl(event.target.value)
  }

  const addBlog = async (event) => {
    event.preventDefault()
    const newObject = {
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl,
      likes: 0,
      user: user
    }
    dispatch(createBlog(newObject))
    // dispatch(setNotification(`${newObject.title} has been added'`, 10))
    dispatch(setNotification({newObject}, 10))
    console.log(newObject.title, "det lyckades");
    // createBlog({
    //   title: newBlogTitle,
    //   author: newBlogAuthor,
    //   url: newBlogUrl,
    //   likes: 0,
    //   user: user
    // })
    // setBlogs(blogs.concat(blogObject))
    // setType('notification')
    // setErrorMessage(`${newBlogTitle} by ${newBlogAuthor} was added`)
    //     setTimeout(() => {
    //     setErrorMessage(null)
    //     }, 5000)
    setNewBlogTitle('')
    setNewBlogAuthor('')
    setNewBlogUrl('')
  }

  return (
    <div className="formDiv" >
      <h2>Create new</h2>
      <form onSubmit={addBlog}>
        title: <input id='Btitle' value={newBlogTitle} onChange={handleBlogTitleChange}/> <br/>
        author: <input id='Bauthor' value={newBlogAuthor} onChange={handleBlogAuthorChange}/> <br/>
        url: <input id='Burl' value={newBlogUrl} onChange={handleBlogUrlChange}/> <br/>
        <button type="submit">create new blog</button>
      </form>
    </div>
  )
}

export default BlogForm

