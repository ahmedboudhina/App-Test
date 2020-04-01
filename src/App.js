import React from 'react';
import Profile from './components/profile'
import Posts from './components/posts'
import Comments from "./components/comments"
import {BrowserRouter as Router , Route, Switch}from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ='/comments/:postId/:postBody/:userName' component={Comments}/>
          <Route path='/' exact component={Profile}></Route>
          <Route path='/posts/:userId/:userName' component={Posts}/>
        </Switch> 
        </div>
    </Router>
  );
}

export default App;
