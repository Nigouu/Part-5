import loginService from '../services/login'
import blogService from '../services/blogs'

const user = null

const loginReducer = (state = user, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            if (action.user === null){
                return null
            } else {
                const user = action.user
                return user
            }
        default:
        return state
    }
}

export const setLogin = user => {
    return async dispatch => {
        // blogService.setToken(user.token)
        // const newUser = await loginService.login(user)
        dispatch({
          type: 'SET_LOGIN',
          user,
        })
      }
    }
  
export default loginReducer