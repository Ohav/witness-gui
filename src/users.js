import React from 'react';
import User from './user';

const Users = ({users}) => (
	<ul>
		<li className="Person">
			<div className="Name">Name</div>
			<div className="Score">ELO Rating</div>
		</li>
		{users.map(user => <User key={users.indexOf(user)} name={user.name} score={user.score} position={users.indexOf(user) + 1}/> )}
	</ul>
  
);

export default Users;
