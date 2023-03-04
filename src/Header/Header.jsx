import React from 'react';
import AddTaskBar from './AddTaskBar';
import classes from './Header.module.css';

const Header = () => {
	return (
		<section className={classes.header}>
			<h1 className={classes.title}>Today's Tasks</h1>
			<AddTaskBar />
		</section>
	);
};

export default Header;
