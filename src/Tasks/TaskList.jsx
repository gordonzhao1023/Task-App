import { useSelector, useDispatch } from 'react-redux';
import { taskActions } from '../store/task-slice';
import TaskItem from './TaskItem';

const TaskList = () => {
	let Tasks;
	const isSetToDone = useSelector((state) => state.task.done);

	if (!isSetToDone) {
		Tasks = useSelector((state) => state.task.taskList);
	} else {
		const currentTasks = useSelector((state) => state.task.taskList);
		console.log(currentTasks);
		Tasks = currentTasks.filter((task) => task.isDone === true);
	}
	console.log(Tasks);

	// this is where i would map
	return (
		<ul>
			{Tasks.map((task) => (
				<TaskItem
					key={task.id}
					id={task.id}
					description={task.description}
					isDone={task.isDone}
				/>
			))}
		</ul>
	);
};

export default TaskList;
