const IndividualUserReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER':
        return action.data
      default:
        return state
    }
  }
  
  export const setIndividual = (user) => {
    return {
      type: 'SET_USER',
      data: user,
    }
  }
  
  export default IndividualUserReducer