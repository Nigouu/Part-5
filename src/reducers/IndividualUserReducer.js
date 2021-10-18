const individualUser = null

const IndividualUserReducer = (state = individualUser, action) => {
    switch (action.type) {
      case 'SET_USER':
        return action.data
      default:
        return state
    }
  }
  
  export const setIndividual = (individualUser) => {
    return {
      type: 'SET_USER',
      data: individualUser,
    }
  }
  
  export default IndividualUserReducer