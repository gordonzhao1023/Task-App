import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
	name: 'task',
	initialState: {
		loading: error,
		taskInput: '',
		searchInput: '',
		taskList: [],
		// doneTaskList: [],
	},
	reducers: {
		toggleLoading(state) {
			state.loading = !state.loading;
		},
		setTaskInput(state, action) {
			state.taskInput = action.payload;
		},
		setSearchInput(state, action) {
			state.searchInput = action.payload;
		},
		addToList(state, action) {
			const newTask = action.payload;
			state.taskList = state.taskList.push({
				id: newTask.id,
				description: newTask.description,
				isDone: false,
			});
		},
		deleteFromList(state, action) {
			const id = action.payload;
			state.taskList = state.taskList.filter((item) => item.id !== id);
		},
		searchFromList(state, action) {
			const input = state.searchInput;
			const allTasks = [...state.taskList];
			const searchResults = [];
			for (const task in allTasks) {
				if (task.descritpion.includes(input)) {
					searchResults.push(task);
				}
			}
			return searchResults;
		},
		addToDoneList(state, action) {
			const id = action.payload;
			const doneItem = state.taskList.filter((item) => item.id === id);
			doneItem.isDone = !doneItem.isDone;
			//
		},
	},
});

export const taskActions = taskSlice.actions;

export default taskSlice;

// One list of original to-do tasks, each containing field called "done" which is by default set to false
// One list of tasks that are already done.
// A search field that lets users search within the respective list
