import { useSelector } from 'react-redux';

const TaskList = () => {
	const Tasks = useSelector((state) => state.task.taskList);
	// this is where i would map
};

export default TasksList;
