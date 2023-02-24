import React from 'react';
import TaskList from '../Tasks/TaskList';
import FilterBuottons from './FilterButtons';
import SearchBar from './SearchBar';
import classes from './Body.module.css';

const Body = () => {
	return (
		<React.Fragment>
			<div className={classes.navbar}>
				<FilterBuottons />
				<SearchBar />
			</div>
			<TaskList />
		</React.Fragment>
	);
};

export default Body;
