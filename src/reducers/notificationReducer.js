const notification = [
    ''
  ]
  
  const notificationReducer = (state = notification, action) => {
    switch (action.type) {
      case 'NOTIFICATION':
        const updatedNotification = ''.concat(action.text)
        return updatedNotification
      case 'HIDE_NOTIFICATION':
        const hideNotification = ''
        return hideNotification
      default:
        return state
    }
  }

  export const setNotification = (textEntered, timeDisplayed) => {

    const time = timeDisplayed * 100

    return async dispatch => {
      dispatch({
        type: 'NOTIFICATION',
        text: textEntered
      })
      setTimeout(() => {
        dispatch({type: 'HIDE_NOTIFICATION'})
      }, time)
    }
}
  
  export default notificationReducer