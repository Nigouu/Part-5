import React, {useState} from 'react' 
// import Notification from '../components/Error'


const BlogForm = ({ createBlog }) => {
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
    createBlog = 
    // await blogService.create 
    ({
        title: newBlogTitle,
        author: newBlogAuthor,
        url: newBlogUrl,
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

    // const blogForm = () => {
        // <Togglable buttonLabel="new blog">
        //   <BlogForm
            // onSubmit={addBlog}
            // value1={newBlogTitle}
            // handleChange1={handleBlogTitleChange}
            // value2={newBlogAuthor}
            // handleChange2={handleBlogAuthorChange}
            // value3={newBlogUrl}
            // handleChange3={handleBlogUrlChange}
        //   />
        // </Togglable>
    // }
    
    return (
        <div>
          <h2>Create new</h2>
          <form onSubmit={addBlog}>
            title: <input value={newBlogTitle} onChange={handleBlogTitleChange}/> <br/>
            author: <input value={newBlogAuthor} onChange={handleBlogAuthorChange}/> <br/>
            url: <input value={newBlogUrl} onChange={handleBlogUrlChange}/> <br/>
            <button type="submit">create new blog</button>
          </form>
          
          {/* <form onSubmit={onSubmit}>
            Title: <input
              value={value1}
              onChange={handleChange1}
            /> <br/>
            Author: <input
              value={value2}
              onChange={handleChange2}
            /><br/>
            Url: <input
              value={value3}
              onChange={handleChange3}
            /><br/>
            <button type="submit">create</button>
          </form> */}
        </div>
      )
    }

export default BlogForm