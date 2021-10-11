
import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
    switch (action.type) {
      case 'LIKE':
        const id = action.id
          const blogToChange = state.find(n => n.id === id)
          const changedBlog = { 
            ...blogToChange, 
            likes: blogToChange.likes + 1 
          }
          return state.map(blog =>
            blog.id !== id ? blog : changedBlog 
          )
      case 'NEW_BLOG':
        return state.concat(action.data)
      case 'INIT_BLOGS':
        return action.data
      case 'DELETE':
        return refreshPage()
      default:
        return state
    }
  }
  
  export const initializeBlogs = (blogs) => {
    return {
      type: 'INIT_BLOGS',
      data: blogs,
    }
  }
  
  export const createBlog = (newObject) => {
    return async dispatch => {
      const newBlog = await blogService.create(newObject)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog,
      })
    }
  }

  export const setBlogLikes = (id, newObject) => {
    return async dispatch => {
      const newLikes = await blogService.update(id, newObject)
      dispatch({
        type: 'LIKE',
        id: id,
        data: newLikes
      })
    }
  }

  function refreshPage(){
    window.location.reload()
  }

  export const delBlog = (id) => {
    return async dispatch => {
      await blogService.del(id)
      dispatch({
        type: 'DELETE'
      })
    }
  }
  
  export default blogReducer