import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
	const Tasks = useSelector((state) => state.task.taskList);
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
