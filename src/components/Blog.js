import React from 'react' 
import Togglable from '../components/Togglable'

const Blog = ({blog, updateLikes, user, delBlog}) => {

  // const [newLikes, setNewLikes] = useState(blog.likes)

    const addLikes = (event) => {
      event.preventDefault()
      // setNewLikes(blog.likes + 1)
      updateLikes  
      (blog.id, {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes +1,
        user: user
      })
  }

  const deleteBlog = (event) => {
    event.preventDefault()
    delBlog(blog.id)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div>
        <div>
        Title: {blog.title}, Author: {blog.author} 
        </div>
        <Togglable buttonLabel='show' buttonLabel2='hide'>
          Url: {blog.url} <br/>

          Likes: {blog.likes} <button onClick={addLikes}>like</button>
          <br/>
          User: {user.username}
          <button onClick={deleteBlog}>delete</button>
        </Togglable>
        <br/>
      </div>  
    </div>
  )
}

export default Blog