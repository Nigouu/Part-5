import React from 'react'
import { useSelector } from 'react-redux'
import Togglable from '../components/Togglable'

const BlogList = () => {

    // const dispatch = useDispatch()

    // const vote = (id, anecdote) => {
    //     console.log('vote', id)
    //     const newObject = anecdote
    //     dispatch(voteAnecdote(id, newObject))
    //     dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
    //   }

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
                    {/* <button onClick={addLikes}>like</button> */}
                    <br/>
                    {/* User: {user.name} */}
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