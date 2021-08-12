import React from 'react'

const User = ({name, score, position}) => (
	<li className="Person">
		<div className="Image">{position}</div>
		<div className="Name">{name}</div>
		<div className="Score">{score}</div>
	</li>
);

export default User;
