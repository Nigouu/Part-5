import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Link
} from "react-router-dom"
import { setIndividualBlog } from '../reducers/IndividualBlogReducer'

const BlogList = () => {
    const dispatch = useDispatch()

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
            {/* {blogs.map(blog => console.log("Alla blogs state i listan: ", blog.title))} */}
            {blogs.map(blog =>
                <div className='blog' key={blog.id}>
                <div>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    onClick={() => dispatch(setIndividualBlog(blog))}> 
                    Title: {blog.title}, Author: {blog.author}
                  </Link>
                </div>
                <br/>
              </div>
            )}
        </div>
    )
}

export default BlogList