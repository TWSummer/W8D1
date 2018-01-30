import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, {this.props.currentUser.username}</h1>
          <button onClick={this.logout.bind(this)} >Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup" >Sign Up</Link>
          <Link to="/login" >Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
