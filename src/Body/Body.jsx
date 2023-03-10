import React from 'react';
import TaskList from '../Tasks/TaskList';
import FilterBuottons from './FilterButtons';
import SearchBar from './SearchBar';
import Loader from '../UI/Loader';
import classes from './Body.module.css';
// import classes from '../'
import { useSelector } from 'react-redux';

const Body = () => {
	const isLoading = useSelector((state) => state.task.loading);
	return (
		<section className={classes.body}>
			<div className={classes.navbar}>
				<FilterBuottons />
				<SearchBar />
			</div>
			{isLoading ? (
				<div className={classes.loader}>
					<Loader />
				</div>
			) : (
				<TaskList />
			)}
		</section>
	);
};

export default Body;
