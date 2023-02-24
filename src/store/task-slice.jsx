import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
	name: 'task',
	initialState: {
		loading: false,
		done: false,
		taskInput: '',
		searchInput: '',
		changed: false,
		taskList: [
			// { description: 'meow', isDone: false },
			// { description: 'jumi', isDone: true },
		],
	},
	reducers: {
		toggleLoading(state) {
			state.loading = !state.loading;
		},
		setSearchInput(state, action) {
			state.searchInput = action.payload;
		},
		toggleDone(state) {
			state.changed = true;
			state.done = !state.done;
		},
		addToList(state, action) {
			const newTask = action.payload;
			state.changed = true;
			state.taskList.push({
				description: newTask,
				isDone: false,
			});
		},
		deleteFromList(state, action) {
			const id = action.payload;
			state.changed = true;
			state.taskList = state.taskList.filter((item) => item.id !== id);
		},
		searchFromList(state, action) {
			const input = state.searchInput;
			const allTasks = [...state.taskList];
			state.changed = true;
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
			state.changed = true;
			const doneItem = state.taskList.filter((item) => item.id === id);
			doneItem.isDone = !doneItem.isDone;
			//
		},
		renderTaskList(state, action) {
			const loadedTasks = action.payload;
			state.changed = true;
			state.taskList = [...loadedTasks];
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
