const individualBlog = null

const IndividualBlogReducer = (state = individualBlog, action) => {
    switch (action.type) {
      case 'SET_BLOG':
        return action.data
      default:
        return state
    }
  }
  
  export const setIndividualBlog = (individualBlog) => {
    console.log("state inne i reducer: ", individualBlog)
    return {
      type: 'SET_BLOG',
      data: individualBlog,
    }
  }
  
  export default IndividualBlogReducer