import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {

  const notification = useSelector(state => state.notifications)

  // const style = {
  //   border: 'solid',
  //   padding: 10,
  //   borderWidth: 1
  // }

  return(
    <div>
      {/* {notification} */}
      {(notification &&
        <Alert variant="success">
      {notification}
    </Alert>
  )}
    </div>
  )
}

export default Notification

  // else {
  //   return (
  //     <div className="error"> {message} </div>
  //   )
  // }


//   if (type === 'error'){
//     return (
//       <div className="error">
//         {message}
//       </div>
//     )
//   } else {
//     return (
//       <div className="notification">
//         {message}
//       </div>
//     )
//   }
// }