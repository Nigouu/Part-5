import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useHistory } from "react-router-dom"


const BlogForm = ({ user }) => {

  const dispatch = useDispatch()
  const history = useHistory()

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
      comments: [], 
      user: user
    }
    console.log(newObject);
    dispatch(createBlog(newObject))
    dispatch(setNotification(`${newObject.title} was added`, 10))
    // console.log(newObject.title, "det lyckades");
    history.push('/')
    // setNewBlogTitle('')
    // setNewBlogAuthor('')
    // setNewBlogUrl('')
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

