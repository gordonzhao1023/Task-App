import Card from '../UI/Card';

const TaskItem = (props) => {
	return (
		<li>
			<Card>
				<p>{props.description}</p>
				<button>Finished!</button>
				<button>Delete</button>
			</Card>
		</li>
	);
};

export default TaskItem;
