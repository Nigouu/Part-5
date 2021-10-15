import userService from '../services/users'

const userReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT_USERS':
        return action.data
      case 'NEW_USER':
        return state.concat(action.data)
      default:
        return state
    }
  }
  
  export const initializeUsers = (users) => {
    return {
      type: 'INIT_USERS',
      data: users,
    }
  }

  export const createUser = (users) => {
    return async dispatch => {
      const newUser = await userService.getAllUsers(users)
      dispatch({
        type: 'NEW_USER',
        data: newUser,
      })
    }
  }
  
  export default userReducer