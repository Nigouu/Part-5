import React from 'react'
import { useSelector } from 'react-redux'


const UserInfo = () => {

    const users = useSelector(({users}) => {
        console.log(users);
        return users
    })

    const ThisUser = useSelector(({user}) => {
        console.log(users);
        return user
    })

    return(
        <div>
            {ThisUser === null 
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
                <h2>{ThisUser.name}</h2>
                {users.map(user =>
                    <div key={user.id}>
                        {user.username === ThisUser.username 
                        ? 
                        <div>
                             <h3> Added Blogs </h3>
                             <div>
                                {user.blog.forEach(blog => console.log(blog.title)
                                // <div>
                                //     {blog.title}
                                // </div>
                                )}
                             </div>
                        </div>
                        : 
                        <div>
                        </div>
                        }
                    </div>
                )}
            </div>
            }
        </div>
    )
}

export default UserInfo