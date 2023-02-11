import { taskActions } from './task-slice';
import { API_URL } from '../Config';

export const fetchTaskList = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			dispatch(taskActions.toggleLoading());
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const data = await response.json();
			return data;
		};

		try {
			const taskList = fetchData();
		} catch (err) {
			console.error(err);
		}
	};
};

export const addTask = (task) => {
	return async (dispatch) => {};
};
