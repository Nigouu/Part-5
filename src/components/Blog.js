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

  const addLikes = () => {
      const newObject = individualBlog
      console.log('id är : ', individualBlog.id);
      console.log('objecktet är är : ', newObject);
      dispatch(setBlogLikes(individualBlog.id, newObject))
      dispatch(setNotification(`you liked ${newObject.title}`, 10))
  }

  const addComments = () => {
    const newObject = individualBlog
    newObject.comments = newObject.comments.concat(newBlogComment)
    console.log('kommentaren är gjord', newBlogComment);
    dispatch(setBlogComments(individualBlog.id, newObject))
    dispatch(setNotification(`you commented on ${individualBlog.title}`, 10))
  }

  const deleteBlog = () => {
    console.log('like', individualBlog.id)
    dispatch(delBlog(individualBlog.id))
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
    // console.log('den kan hämta blog comments: ',individualBlog.comments);
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
        {individualBlog.comments.map( comment => 
            <li key = {comment}> {comment} </li>
        )}
        <form onSubmit={addComments}>
          <input value={newBlogComment} onChange={handleBlogCommentChange}/>
          <button type="submit">comment</button>
        </form>
        </div>
      </div>
    </div>
  )
  }
}

export default Blog