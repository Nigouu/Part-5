import React from 'react'
import { useSelector } from 'react-redux'


const IndividualUserInfo = () => {

    const individualUser = useSelector(({individualUser}) => {
        console.log(individualUser);
        return individualUser
    })

    if (!individualUser) {
        return null
    } else {
        return(
            <div>
                <h2>{individualUser.name}</h2>
                <h3> Added Blogs </h3>
                    <div>
                        {individualUser.blog.map(blog => 
                            <div key={blog.id}>
                                {blog.title}
                            </div>
                        )}
                    </div>
            </div>
        )
      }
}

export default IndividualUserInfo