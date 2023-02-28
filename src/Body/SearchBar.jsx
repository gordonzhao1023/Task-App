import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/task-slice';
import classes from './SearchBar.module.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const searchRef = useRef('');
	const allTasks = useSelector((state) => state.task.taskList);
	const isDone = useSelector((state) => state.task.done);

	const searchTaskHandler = (e) => {
		e.preventDefault();
		dispatch(taskActions.toggleSearching());
		const searchResults = allTasks.filter((task) =>
			task.description.includes(searchRef.current.value)
		);
		if (searchResults.length > 0) {
			dispatch(taskActions.renderSearchResultList(searchResults));
		}
		// dispatch(taskActions.renderTaskList(searchResults));
	};

	const clearSearchHandler = (e) => {
		e.preventDefault();
		searchRef.current.value = '';
		dispatch(taskActions.toggleSearching());
	};

	return (
		<React.Fragment>
			<form onSubmit={searchTaskHandler} className={classes.form}>
				<input
					type='search'
					id='task-search'
					placeholder='Search Task Description Here...'
					ref={searchRef}
					className={classes.search}
				/>
				<button>SEARCH</button>
			</form>
			<button onClick={clearSearchHandler}>Clear</button>
		</React.Fragment>
	);
};

export default SearchBar;
