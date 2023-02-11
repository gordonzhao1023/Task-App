import { taskActions } from './task-slice';

export const fetchTaskList = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			dispatch(taskActions.toggleLoading());
		};
	};
};

export const addTask = (task) => {
	return async (dispatch) => {};
};
