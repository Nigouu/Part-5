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
      case 'COMMENT':
        const idC = action.id
          const blogToComment = state.find(n => n.id === idC)
          const changedBlogComment = { 
            ...blogToComment, 
            comments: blogToComment.comments.concat(action.comment)
          }
          return state.map(blog =>
            blog.id !== idC ? blog : changedBlogComment 
          )
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

  export const setBlogComments = (id, newObject) => {
    return async dispatch => {
      const newComment = await blogService.update(id, newObject)
      dispatch({
        type: 'COMMENT',
        id: id,
        data: newComment
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