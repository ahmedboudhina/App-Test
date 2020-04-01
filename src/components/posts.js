import React, { Component } from 'react'
import axios from 'axios'
import "./posts.css";
import {Link} from "react-router-dom"
 class Posts extends Component {
state={
    posts:[],
    username:""
}
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=`+this.props.match.params.userId).then(response=>{
            this.setState({
                posts : response.data,
                username:this.props.match.params.userName
            })

            // console.log(response.data)
           
        })
    }
    render() {
        return (
    <div>
        <nav>
            <img></img>
            <ul>
                <li><h5>Home</h5></li>
                <li><h5>Job Offers</h5></li>
                <li><h5>Candidate</h5></li>
                <li><h5>News</h5></li>
                <li><h5>About</h5></li>
                <li><h5>Elements</h5></li>
                <li><h5>Shop</h5></li>
                <li><h5>Contact</h5></li>
                <li><h5>Apply</h5></li>
            </ul>
        </nav>
            <div className="container">
               {this.state.posts.map((post,i)=>
                   <div className="container-post"> 
                   <Link to = {`/comments/${post.id}/${post.body}/${this.state.username}`}>
                       <img src ="https://www.justsee.fr/wp-content/uploads/2013/04/flat-design-office-desk-o.png" alt=""></img>
                    </Link>    
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                   </div>
               )}
            </div>
              
              <ul className='footer'>
                  <li>
                    <h3>About</h3>
                  </li>
                  
                  <li>
                    <h3>Latest Tweet</h3>
                  </li>

                  <li>
                    <h3>News from Blog</h3>
                  </li>
                  <li>
                    <h3>Tags</h3>
                  </li>
              </ul>
          
          </div>
        )
    }
}
export default Posts