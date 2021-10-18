import React from 'react'
import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router, Link
  } from "react-router-dom"


const UserInfo = () => {

    const users = useSelector(({users}) => {
        console.log(users);
        return users
    })

    return(
        <div>
            <h2>Users</h2>
            <ul>
            {users.map(user => 
                <li key={user.id} >
                <Link to={`/user/${user.id}`}>{user.username} , Number of Blogs: {user.blog.length}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default UserInfo