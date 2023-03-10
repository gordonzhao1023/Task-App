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
import Modal from './UI/Modal';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const Task = useSelector((state) => state.task);
	const hasError = useSelector((state) => state.task.error);
	// console.log(Task);
	const getValue = (value) => {
		return value;
	};

	const realTasks = useMemo(() => getValue(Task), []);
	// console.log(realTasks);s

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
			{hasError && <Modal />}
			<Header />
			<Body />
		</Layout>
	);
}

export default App;
