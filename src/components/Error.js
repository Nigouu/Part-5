import React from 'react'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }
  // else {
  //   return (
  //     <div className="error"> {message} </div>
  //   )
  // }

  if (type === 'error'){
    return (
      <div className="error">
        {message}
      </div>
    )
  } else {
    return (
      <div className="notification">
        {message}
      </div>
    )
  }
}

export default Notification