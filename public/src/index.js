import React from 'react';
import ReactDOM from 'react-dom';
import Users from './users';
import $ from 'jquery';

let users = [{name: "Loading users..."}];

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {users};
    this.userList = this.userList.bind(this);
  }

  componentDidMount() {
    this.userList = this.userList.bind(this);
    this.userList();
  }

  userList2 () {
    var invocation = new XMLHttpRequest();
    if(invocation) {    
        invocation.open('GET', 'http://10.1.204.191:5000/get_ratings', true);
        invocation.send(); 
      }
    }

  userList() {
    console.log("User list!");
    return $.ajax({
      type: 'GET',
      url: 'http://10.1.204.191:5000/get_ratings',
      success: (data) => {
        console.log(data);
        this.setState({users: data});
      },
      error: (jqXHR, textstatus, errorThrown) => {
        console.log(errorThrown);
        console.log('error');
      }
  });
}

  render() {
    return(
      <div className="Leaderboard">
        <div className="Title">Witness Leaderboard</div>
        <Users users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(
  <Leaderboard />,
  document.getElementById('root')
);
