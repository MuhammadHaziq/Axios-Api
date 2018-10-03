import React, { Component } from 'react';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import SpecificUser from './SpecificUser.js';

class SelectedUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error:null,

    };
  }
  componentDidMount() {
    const { user } = this.props.match.params;
    console.log(user);
    axios.get('https://api.github.com/users/'+user+'')
    .then((response) => {
      console.log("response is  : ", response);
      if (response.status === 200) {
        this.setState({
          users: response.data,
          isLoading: false,
        });
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log("error is : ", error);
      this.setState({ isLoading: true });
    });
  }

  componentDidCatch(error, errorInfo) {
          this.setState({
            error: error,
            errorInfo: errorInfo
          })
}

componentWillMount(){
  this.setState({
    users : [],
  });
    console.log('user');
}



  render() {
    const { users, isLoading,error,errorinfo } = this.state;
    if (this.state.error) {
      return (<div>{this.state.error}</div>)
    }if(this.state.isLoading){
      return ("Loading");
    }
console.log(this.props);
console.log(this.props.match.params);
    return (
      <div>
      <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login Name</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.state.users.id}</td>
            <td>{this.state.users.login}</td>
          </tr>
          </tbody>
    </Table>
      </div>

    );


  }
}

export default SelectedUser;

// (this.state.users).map(({ id, login, avatar_url }) => <SpecificUser  key={id} id={id} avatar_url={avatar_url} login={login} />)
// <ListGroup>
//   {
//     (this.state.users).map(({ id, login }) => <ListGroupItem key={id}>{login}</ListGroupItem>)
//   }
// </ListGroup>

// <tr key={id}> <td><a href="3"> {id} </a> </td> <td>{login} </td> <td>{type}</td> </tr>
