import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return(
    <div style = {style}>
      {notification}
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