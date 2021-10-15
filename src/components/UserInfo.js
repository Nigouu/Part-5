import React from 'react'
import { useSelector } from 'react-redux'


const UserInfo = () => {

    // const users = useSelector(({users}) => {
    //     console.log(users);
    //     return users
    // })

    return(
        <div>
            <h2>Users</h2>
            {/* {users.map(user =>
                <div key={user.id}>
                <div>
                  <div>
                  User: {user.username}
                  </div>
                  <br/>
                </div>
               </div>
            )} */}
        </div>
    )
}

export default UserInfo