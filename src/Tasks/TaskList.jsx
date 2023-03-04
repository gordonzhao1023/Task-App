import { useSelector, useDispatch } from 'react-redux';
import { taskActions } from '../store/task-slice';
import TaskItem from './TaskItem';
import classes from './TaskList.module.css';

const TaskList = () => {
	let Tasks;
	const isSetToDone = useSelector((state) => state.task.done);
	const isSetToSearching = useSelector((state) => state.task.isSearching);

	// if (!isSetToDone) {
	// 	if (isSetToSearching) {
	// 		Tasks = useSelector((state) => state.task.searchResultList);
	// 	} else {
	// 		const tasks = useSelector((state) => state.task.taskList);
	// 		Tasks = tasks.filter((task) => task.isDone === false);
	// 	}
	// } else {

	// 	const currentTasks = useSelector((state) => state.task.taskList);
	// 	Tasks = currentTasks.filter((task) => task.isDone === true);
	// }

	if (isSetToSearching) {
		Tasks = useSelector((state) => state.task.searchResultList);
	} else {
		if (!isSetToDone) {
			const tasks = useSelector((state) => state.task.taskList);
			Tasks = tasks.filter((task) => task.isDone === false);
		} else {
			const currentTasks = useSelector((state) => state.task.taskList);
			Tasks = currentTasks.filter((task) => task.isDone === true);
		}
	}

	// this is where i would map
	return (
		<ul className={classes.tasklist}>
			{isSetToSearching && Tasks.length === 0 && <p>No task found</p>}
			{Tasks.length === 0 && !isSetToSearching ? (
				<p>Nothing to see here...</p>
			) : (
				Tasks.map((task) => (
					<TaskItem
						key={task.id}
						id={task.id}
						description={task.description}
						isDone={task.isDone}
					/>
				))
			)}
		</ul>
	);
};

export default TaskList;
