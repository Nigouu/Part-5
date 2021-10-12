import loginService from '../services/login'
import blogService from '../services/blogs'

const user = {}

const loginReducer = (state = user, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            const user = action.data
        return user
        default:
        return state
    }
}

export const setLogin = user => {
    return async dispatch => {
        blogService.setToken(user.token)
        const newUser = await loginService.login(user)
        dispatch({
          type: 'SET_LOGIN',
          data: newUser,
        })
      }
    }
  
export default loginReducer