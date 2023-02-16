import { taskActions } from './task-slice';
import { API_URL } from '../Config';

export const fetchTaskList = () => {
	return async (dispatch) => {
		const fetchTasks = async () => {
			dispatch(taskActions.toggleLoading());
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const data = await response.json();
			return data;
		};

		try {
			const taskList = await fetchTasks();
			// dispatch(taskActions.toggleLoading());
			for (const key in taskList) {
				loadedMeals.push({
					id: key,
					description: responseData[key].description,
					isDone: false,
				});
			}
		} catch (err) {
			console.error(err);
		}
	};
};

export const addTask = (task) => {
	return async (dispatch) => {
		const postData = async () => {
			// dispatch(taskActions.toggleLoading());
			const response = await fetch(API_URL, {
				method: 'POST',
				body: JSON.stringify({
					description: task.description,
					isDone: false,
				}),
			});

			if (!response.ok) {
				throw new Error('Something went wrong. Unable to add task');
			}

			const data = await response.json();

			return data;
		};
		try {
			const newTask = await postData();
			dispatch(taskActions.toggleLoading());
			dispatch(taskActions.addToList(newTask));
		} catch (err) {
			console.error(err);
		}
	};
};
