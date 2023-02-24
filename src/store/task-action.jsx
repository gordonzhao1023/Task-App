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
			// taskList will be an array of objects
			// dispatch(taskActions.toggleLoading());
			console.log(taskList);
			const loadedTasks = [];
			for (const key in taskList) {
				loadedTasks.push({
					id: key,
					description: taskList[key].description,
					isDone: taskList[key].isDone,
				});
			}
			dispatch(taskActions.renderTaskList(loadedTasks));
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
					description: task,
					isDone: false,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
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
			dispatch(taskActions.addToList(task));
			dispatch(fetchTaskList());
		} catch (err) {
			console.error(err);
		}
	};
};

export const deleteTask = (id) => {
	return async (dispatch) => {
		const deleteTask = async () => {
			const response = await fetch(
				`https://to-do-list-app-3703b-default-rtdb.firebaseio.com/tasks/${id}.json`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error('Something went wrong. Unable to add task');
			}
		};

		try {
			await deleteTask();
			dispatch(taskActions.toggleLoading());
			dispatch(taskActions.deleteFromList(id));
		} catch (err) {
			console.error(err);
		}
	};
};

export const finishTask = (id) => {
	return async (dispatch) => {
		const setTaskToDone = async () => {
			const response = await fetch(
				`https://to-do-list-app-3703b-default-rtdb.firebaseio.com/tasks/${id}.json`,
				{
					method: 'PATCH',
					body: JSON.stringify({
						isDone: true,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			console.log(data);
			if (!response.ok) {
				throw new Error(
					'Something went wrong. Unable to set this task to Done!'
				);
			}
		};

		try {
			await setTaskToDone();
			dispatch(taskActions.addToDoneList(id));
			dispatch(fetchTaskList());
		} catch (err) {
			console.error(err);
		}
	};
};
