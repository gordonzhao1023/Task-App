import { taskActions } from '../store/task-slice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskList } from '../store/task-action';
import classes from './FilterButtons.module.css';

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
			dispatch(fetchTaskList());
		}
	};

	return (
		<div className={classes.filterButtons}>
			<button onClick={toDoHandler} className={!isSetToDone && classes.active}>
				To-Do
			</button>
			<button onClick={doneHandler} className={isSetToDone && classes.active}>
				Finished
			</button>
		</div>
	);
};

export default FilterButtons;
