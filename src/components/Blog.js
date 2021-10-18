import React from 'react'
import { useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { setBlogLikes } from '../reducers/blogReducer'
import { delBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const Blog = () => {

  const dispatch = useDispatch()

  const addLikes = (id, blog) => {
      console.log('like', id)
      const newObject = blog
      dispatch(setBlogLikes(id, newObject))
      dispatch(setNotification(`you liked ${blog.title}`, 10))
    }

    const deleteBlog = (id) => {
      console.log('like', id)
      dispatch(delBlog(id))
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
      <h2>{individualBlog.title}</h2>
      <div>
        <div>
        Author: {individualBlog.author}
        </div>
          Url: {individualBlog.url} <br/>
          Likes: {individualBlog.likes} <button onClick={addLikes}>like</button>
          <br/>
          Added by: {individualBlog.user.name}
          <br/>
          <button onClick={deleteBlog}>delete</button>
        <br/>
      </div>
    </div>
  )
  }
}

export default Blog