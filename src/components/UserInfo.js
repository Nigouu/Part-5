import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter as Router, Link
  } from "react-router-dom"
  import { setIndividual } from '../reducers/IndividualUserReducer'


const UserInfo = () => {

    const dispatch = useDispatch()

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
                <Link to={`/user/${user.id}`} onClick={() => dispatch(setIndividual(user))} > {user.username} , Number of Blogs: {user.blog.length}
                
                </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default UserInfo