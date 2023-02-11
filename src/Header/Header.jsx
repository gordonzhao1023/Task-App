import React from 'react';
import AddTaskBar from './AddTaskBar';

const Header = () => {
	return (
		<React.Fragment>
			<h1>Today's Tasks</h1>
			<AddTaskBar />
		</React.Fragment>
	);
};

export default Header;
