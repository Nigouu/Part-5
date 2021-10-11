import React from 'react'
import { useSelector } from 'react-redux'
import Togglable from '../components/Togglable'
import { setNotification } from '../reducers/notificationReducer'
import { setBlogLikes } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const BlogList = () => {

    const dispatch = useDispatch()

    const addLikes = (id, blog) => {
        console.log('like', id)
        const newObject = blog
        dispatch(setBlogLikes(id, newObject))
        dispatch(setNotification(`you liked '${blog.title}'`, 10))
      }

    const blogs = useSelector(({blogs}) => {
        return blogs
    })

    const sort = (blogs) => {
        blogs.sort(function (a, b) {
        return b.likes - a.likes
        })
    }

    return(
        <div>
            {sort(blogs)}
            {blogs.map(blog =>
                <div className='blog' key={blog.id}>
                <div>
                  <div>
                  Title: {blog.title}, Author: {blog.author}
                  </div>
                  <Togglable buttonLabel='show' buttonLabel2='hide'>
                    Url: {blog.url} <br/>
          
                    Likes: {blog.likes} 
                    <button onClick={() => addLikes(blog.id, blog)}>vote</button>
                    <br/>
                    {/* <button onClick={deleteBlog}>delete</button> */}
                  </Togglable>
                  <br/>
                </div>
              </div>
            )}
        </div>
    )
}

export default BlogList