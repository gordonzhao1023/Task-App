import React, { useRef } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
	const searchRef = useRef('');

	const searchTaskHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={searchTaskHandler} className={classes.form}>
			<input
				type='search'
				id='task-search'
				placeholder='Search Task DescriptionHere...'
				ref={searchRef}
				className={classes.search}
			/>
			<button>SEARCH</button>
		</form>
	);
};

export default SearchBar;
