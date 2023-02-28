import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Layout from './UI/Layout';
import Header from './Header/Header';
import Body from './Body/Body';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from './store/task-slice';
import { fetchTaskList } from './store/task-action';
import { useMemo } from 'react';
import { createSelector } from 'reselect';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const Task = useSelector((state) => state.task);
	// console.log(Task);
	const getValue = (value) => {
		return value;
	};

	const realTasks = useMemo(() => getValue(Task), []);
	// console.log(realTasks);

	useEffect(() => {
		dispatch(fetchTaskList());
	}, [dispatch]);

	// useEffect(() => {
	// 	if (isInitial) {
	// 		isInitial = false;
	// 		return;
	// 	}

	// 	if (!realTasks.changed) {
	// 		dispatch(fetchTaskList());
	// 	}
	// }, [Task, dispatch]);

	return (
		<Layout>
			<Header />
			<Body />
		</Layout>
	);
}

export default App;
