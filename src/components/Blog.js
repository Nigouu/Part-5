import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { setBlogLikes } from '../reducers/blogReducer'
import { setBlogComments } from '../reducers/blogReducer'
import { delBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const Blog = () => {
  const [newBlogComment, setNewBlogComment] = useState('')
  const dispatch = useDispatch()

  const addLikes = (id, blog) => {
      console.log('like', id)
      const newObject = blog
      dispatch(setBlogLikes(id, newObject))
      dispatch(setNotification(`you liked ${blog.title}`, 10))
  }

  const addComments = (id, blog) => {
    console.log('like', id)
    const newObject = blog
    dispatch(setBlogComments(id, newObject, newBlogComment))
    dispatch(setNotification(`you commented on ${blog.title}`, 10))
  }

  const deleteBlog = (id) => {
    console.log('like', id)
    dispatch(delBlog(id))
  }

  const handleBlogCommentChange = (event) => {
    console.log(event.target.value)
    setNewBlogComment(event.target.value)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const individualBlog = useSelector(({individualBlog}) => {
    console.log(individualBlog);
    return individualBlog
  })

  if (!individualBlog) {
    return null
} else {
  return (
    <div style={blogStyle} className='blog' >
      <h1>{individualBlog.title}</h1>
      <div>
        Author: {individualBlog.author}
        <br/>
        Url: {individualBlog.url} <br/>
        Likes: {individualBlog.likes} <button onClick={addLikes}>like</button>
        <br/>
        Added by: {individualBlog.user.name}
        <br/>
        <button onClick={deleteBlog}>delete</button>
        <div>
          <h3>Comments</h3>
          <ul>
            <li>Fin blog!</li>
            <form onSubmit={addComments}>
            <input id='Burl' value={newBlogComment} onChange={handleBlogCommentChange}/>
            <button type="submit">comment</button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  )
  }
}

export default Blog