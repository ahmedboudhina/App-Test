import React, { Component } from "react";
import axios from "axios";
import "./profile.css";
import CardUser from './cardUser'
class Profile extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      // console.log(response.data)
      this.setState({ users: response.data });
    });
  }
  render() {
    return (
      <div className = "container">
          {this.state.users.map((user,i)=>
            <CardUser user={user} key={i} />          
              )}
      </div>
    );
  }
}
export default Profile;
