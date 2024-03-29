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
    return $.ajax({
      type: 'GET',
      url: 'http://10.1.204.191:5000/get_ratings',
      success: (data) => {
        let arr = []
        for (const [key, val] of Object.entries(JSON.parse(data))) {
          arr.push({name: key, score: val})
        }
        this.setState({users: arr});
        
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
        <div className="Title">Ping Pong Leaderboard</div>
        <Users users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(
  <Leaderboard />,
  document.getElementById('Leaderboard')
);
