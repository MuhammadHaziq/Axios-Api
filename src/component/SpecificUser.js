import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
class SpecificUser extends Component {

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
                         <td>{this.props.avatar_url}</td>
                       </tr>
                  </BrowserRouter>

    );
  }
}

export default SpecificUser;
// {`${this.match.url}/`}
