import Card from '../UI/Card';
import { useSelector, useDispatch } from 'react-redux';
import { taskActions } from '../store/task-slice';
import classes from './TaskItem.module.css';
import { deleteTask, finishTask } from '../store/task-action';

const TaskItem = (props) => {
	const dispatch = useDispatch();

	const addToDoneHandler = (e) => {
		e.preventDefault();
		dispatch(finishTask(props.id));
	};

	const deleteTaskHandler = (e) => {
		e.preventDefault();
		dispatch(deleteTask(props.id));
	};

	return (
		<li>
			<Card>
				<p className={classes.title}>{props.description}</p>
				<button onClick={addToDoneHandler}>Finished!</button>
				<button onClick={deleteTaskHandler}>Delete</button>
			</Card>
		</li>
	);
};

export default TaskItem;
