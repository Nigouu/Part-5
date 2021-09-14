import React, { useState } from 'react'
// import blogs from '../services/blogs'
// import Notification from '../components/Error'


const BlogForm = ({ createBlog, user }) => {
  // onSubmit, handleChange1, handleChange2, handleChange3, value1, value2, value3}) => {

  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')
  // const [errorMessage, setErrorMessage] = useState(null)
  // const [type, setType] = useState('')

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
    createBlog({
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl,
      likes: 0,
      user: user
    })
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
    <div>
      <h2>Create new</h2>
      <form onSubmit={addBlog}>
        title: <input value={newBlogTitle} onChange={handleBlogTitleChange}/> <br/>
        author: <input value={newBlogAuthor} onChange={handleBlogAuthorChange}/> <br/>
        url: <input value={newBlogUrl} onChange={handleBlogUrlChange}/> <br/>
        <button type="submit">create new blog</button>
      </form>
    </div>
  )
}

export default BlogForm
