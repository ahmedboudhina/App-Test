import React, { Component } from 'react'
import axios from 'axios'
import'./comments.css'

export default class comments extends Component {
    state={
        comments:[]
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.props.match.params.postId).then(response=>{
           this.setState({
               comments: response.data
           })
       })
    }
    render() {
        return (
         <div className="Container">
            <div className="container-comments">
              <div className = "post-text">
               <h3> {this.props.match.params.userName} </h3>
               <p> {this.props.match.params.postBody} </p>
               </div>
               <ul> 
                   <li>Like</li>
                   <li>Comment </li>
                   <li>Share</li>
               </ul>
               <div className="comments">
               {this.state.comments.map((comment,i)=>
                <div>
                    <h4>{comment.name}</h4>
                    <p> {comment.body}</p>
                </div>
               )}
               </div>
               <input type={Text} placeholder="write a comment here"></input>
            </div>
         </div>
        )
    }
}
