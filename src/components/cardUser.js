import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 function CardUser({user}) {
    return (
       <div className="card-container">
           <div className="header-card"></div>
                <div className="avatar">
                  <img alt="" src="http://lorempixel.com/100/100/people/9/" />
                </div>
       <div className="description">
           <h3> {user.name} </h3> 
           <h4>{user.company.name}</h4>
           <p>{user.company.catchPhrase}</p>
           <Link to ={`/posts/${user.id}/${user.name}`}>
           <Button style={{width:"150px"}}>Following</Button>
           </Link>
       </div>
       </div>
                
           
    )
}

export default CardUser