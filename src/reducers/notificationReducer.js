const notification = [
    ''
  ]
  
  const notificationReducer = (state = notification, action) => {
    switch (action.type) {
      case 'NOTIFICATION':
        const updatedNotification = ''.concat(action.content, ' has been added')
        return updatedNotification
      case 'HIDE_NOTIFICATION':
        const hideNotification = ''
        return hideNotification
      default:
        return state
    }
    
  }
  
  export default notificationReducer