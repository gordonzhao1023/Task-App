import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, fetchTaskList } from '../store/task-action';
import { taskActions } from '../store/task-slice';
import classes from './AddTaskBar.module.css';

const AddTaskBar = () => {
	const taskRef = useRef('');
	const dispatch = useDispatch();

	const addTaskHandler = (e) => {
		e.preventDefault();
		const newTask = taskRef.current.value;
		dispatch(addTask(newTask));
		taskRef.current.value = '';
	};

	return (
		<form onSubmit={addTaskHandler} className={classes.form}>
			<input
				type='text'
				id='country-search'
				placeholder='ADD YOUR TASK HERE...'
				ref={taskRef}
				// className=
			/>
			<button>ADD</button>
		</form>
	);
};

export default AddTaskBar;
