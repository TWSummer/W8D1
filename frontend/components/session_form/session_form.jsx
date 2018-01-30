import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    return (
      this.props.loggedIn ? (
        <Redirect to="/" />
      ) : (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="username" >Username</label>
          <input onChange={this.update("username")}
            id="username"
            type="text"
            value={this.state.username} />
          <label htmlFor="password" >Password</label>
          <input onChange={this.update("password")}
            id="password"
            type="password"
            value={this.state.password} />
          <input type="submit" value={this.props.formType} />
        </form>
        <ul>
        {
          this.props.errors.map( (error, idx) => (
            <li key={idx}>{error}</li>
          ))
        }
        </ul>
      </div>
    ));
  }
}

export default withRouter(SessionForm);
