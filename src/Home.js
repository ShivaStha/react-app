import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

	 state = {
    users:[]
  }

  componentDidMount(){
       axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }


   render() {
      return (
         <div>
            <h2>Home</h2>
              <ul>
          {this.state.users.map(user => <li>{user.name}</li>)}
         </ul>
         </div>
      );
   }
}
export default Home;