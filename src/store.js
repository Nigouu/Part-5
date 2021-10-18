import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import blogService from './services/blogs'
import userService from './services/users'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import IndividualUserReducer from './reducers/IndividualUserReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notifications: notificationReducer,
  blogs: blogReducer,
  user: loginReducer,
  users: userReducer,
  individualUser: IndividualUserReducer
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

userService.getAllUsers().then(users =>
  users.forEach(user => {
    store.dispatch({ type: 'NEW_USER', data: user })
  })
)

export default store