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

    if (!ThisUser) {
        return null
    } else {
        return(
            <div>
                <h2>{ThisUser.name}</h2>
                <h3> Added Blogs </h3>
                {users.map(user =>
                    <div key={user.id}>
                        {user.username === ThisUser.username 
                        ? 
                        <div>
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
        )
      }
}

export default UserInfo