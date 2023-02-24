import { taskActions } from '../store/task-slice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskList } from '../store/task-action';

const FilterButtons = () => {
	const dispatch = useDispatch();
	const isSetToDone = useSelector((state) => state.task.done);

	const toDoHandler = (e) => {
		e.preventDefault();
		if (isSetToDone) {
			dispatch(taskActions.toggleDone());
		}
	};

	const doneHandler = (e) => {
		e.preventDefault();
		console.log(isSetToDone);
		if (!isSetToDone) {
			dispatch(taskActions.toggleDone());
			dispatch(fetchTaskList());
		}
	};

	return (
		<div>
			<button onClick={toDoHandler}>To-Do</button>
			<button onClick={doneHandler}>Done</button>
		</div>
	);
};

export default FilterButtons;
