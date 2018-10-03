import React, { Component } from 'react';
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import Users from './component/Users.js';
import Api from './Api.js';
import SelectedUser from './component/SelectedUser.js';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {


  render(){

      return (
                <div className="container">
                    <BrowserRouter>
                        <Api>
                          <Switch>
                              <Route path="/" exact component={Api}/>
                              <Route path="/:user" exact component={SelectedUser}/>
                          </Switch>
                        </Api>
                    </BrowserRouter>
                </div>
      );
  }
}

export default App;


// <ListGroup>
//   {
//     (this.state.users).map(({ id, login }) => <ListGroupItem key={id}>{login}</ListGroupItem>)
//   }
// </ListGroup>

// <tr key={id}> <td><a href="3"> {id} </a> </td> <td>{login} </td> <td>{type}</td> </tr>
//
// constructor(props) {
//   super(props);
//   this.state = {
//     users: [],
//     isLoading: true,
//     error:null,
//
//   };
// }
//
// componentDidMount() {
//   axios.get('https://api.github.com/users')
//   .then((response) => {
//     console.log("response is  : ", response);
//     if (response.status === 200) {
//       this.setState({
//         users: response.data,
//         isLoading: false,
//       });
//     }
//   })
//   .catch((error) => {
//     console.log("error is : ", error);
//     this.setState({ isLoading: true });
//   });
// }
//
// componentDidCatch(error, errorInfo) {
//         this.setState({
//           error: error,
//           errorInfo: errorInfo
//         })
// }
//
// componentWillMount(){
// this.setState({
//   users : [],
// });
//   console.log('user');
// }
//
//
//
// render() {
//   const { users, isLoading,error,errorinfo } = this.state;
//   if (this.state.error) {
//     return (<div>{this.state.error}</div>)
//   }if(this.state.isLoading){
//     return ("Loading");
//   }
// console.log(this.props);
// console.log(this.state.users.login);
//   return (
//     <div className="conatiner">
//         <Table bordered hover>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Login Name</th>
//                 <th>Type</th>
//               </tr>
//             </thead>
//
//       {
//         (this.state.users).map(({ id, login, avatar_url }) => <Users  key={id} id={id} avatar_url={avatar_url} login={login} />)
//       }
//
//       </Table>
//     </div>
//   );
// }
