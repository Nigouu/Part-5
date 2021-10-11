import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import blogService from './services/blogs'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notifications: notificationReducer,
  blogs: blogReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

blogService.getAll().then(blogs =>
  blogs.forEach(blog => {
    store.dispatch({ type: 'NEW_BLOG', data: blog })
  })
)

export default store