import React from 'react'
import { useSelector } from 'react-redux'


const UserInfo = () => {

    const users = useSelector(({users}) => {
        console.log(users);
        return users
    })

    const user = useSelector(({user}) => {
        console.log(users);
        return user
    })

    return(
        <div>
            
            {user === null 
            ? 
            <div>
                <h2>Users</h2>
                {users.map(user =>
                    <div key={user.id}>
                        <div>
                            <div>
                                {user.username}, Number of Blogs: {user.blog.length}
                            </div>
                            <br/>
                        </div>
                    </div>
                )}
            </div>
            :
            <div>
                <h2>{user.name}</h2>
                {/* {users.map(user =>
                    <div key={user.id}>
                        <div>
                            <div>
                                {user.username}, Number of Blogs: {user.blog.length}
                            </div>
                            <br/>
                        </div>
                    </div>
                )} */}
            </div>
            }
        </div>
    )
}

export default UserInfo