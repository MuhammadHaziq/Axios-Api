import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
class Users extends Component {

  render() {
      console.log(this.props.id);
      console.log(this.props.login);
      console.log(this.props.avatar_url);
      console.log(this.props);
    return (

                    <BrowserRouter>
                       <tr>
                         <td>{this.props.id}</td>
                         <td>{this.props.login}</td>
                         <td><Link to = {`${this.props.login}`} >{this.props.avatar_url}</Link></td>
                       </tr>
                   </BrowserRouter>

    );
  }
}

export default Users;
// {`${this.match.url}/`}
