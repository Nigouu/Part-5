const blogReducer = (state = [], action) => {
    switch (action.type) {
    //   case 'VOTE':
    //     const id = action.id
    //       const blogToChange = state.find(n => n.id === id)
    //       const changedBlog = { 
    //         ...blogToChange, 
    //         votes: blogToChange.votes + 1 
    //       }
    //       return state.map(blog =>
    //         blog.id !== id ? blog : changedBlog 
    //       )
      case 'NEW_BLOG':
        return state.concat(action.data)
      case 'INIT_BLOGS':
        return action.data
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
  
  export const createBlog = (data) => {
    return {
      type: 'NEW_BLOG',
      data,
    }
  }
  
  export default blogReducer