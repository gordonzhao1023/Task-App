import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
	name: 'task',
	initialState: {
		loading: false,
		done: false,
		isSearching: false,
		searchInput: '',
		taskList: [
			// { description: 'meow', isDone: false },
			// { description: 'jumi', isDone: true },
		],
		searchResultList: [],
	},
	reducers: {
		toggleLoading(state) {
			state.loading = !state.loading;
		},
		toggleSearching(state) {
			state.isSearching = !state.isSearching;
		},
		toggleDone(state) {
			state.done = !state.done;
		},
		addToList(state, action) {
			const newTask = action.payload;
			state.taskList.push({
				description: newTask,
				isDone: false,
			});
		},
		deleteFromList(state, action) {
			const id = action.payload;
			state.taskList = state.taskList.filter((item) => item.id !== id);
		},
		addToDoneList(state, action) {
			const id = action.payload;
			const doneItem = state.taskList.filter((item) => item.id === id);
			doneItem.isDone = !doneItem.isDone;
			//
		},
		renderTaskList(state, action) {
			const loadedTasks = action.payload;
			state.taskList = [...loadedTasks];
		},
		renderSearchResultList(state, action) {
			const searchResults = action.payload;
			state.searchResultList = [...searchResults];
		},
		// returnList(state) {
		// 	if (state.done) {
		// 		return state.taskList;
		// 	} else {
		// 		const tempList = [...state.taskList];
		// 		console.log(tempList);
		// 		const doneList = tempList.filter((task) => task[0].isDone === false);
		// 		return doneList;
		// 	}
		// },
	},
});

export const taskActions = taskSlice.actions;

export default taskSlice;

// One list of original to-do tasks, each containing field called "done" which is by default set to false
// One list of tasks that are already done.
// A search field that lets users search within the respective list
