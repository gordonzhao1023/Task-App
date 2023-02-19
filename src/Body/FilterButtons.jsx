import { taskActions } from '../store/task-slice';
import { useSelector, useDispatch } from 'react-redux';

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
		if (!isSetToDone) {
			dispatch(taskActions.toggleDone());
		}
	};

	return (
		<div>
			<button onSubmit={toDoHandler}>To-Do</button>
			<button onSubmit={doneHandler}>Done</button>
		</div>
	);
};

export default FilterButtons;
