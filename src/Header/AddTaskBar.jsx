import React, { useReducer } from 'react';

const AddTaskBar = () => {
	const taskRef = useRef('');
	return (
		<form>
			<input
				type='text'
				id='country-search'
				placeholder='Add your task here...'
				ref={taskRef}
				// className=
			/>
			<button>ADD</button>
		</form>
	);
};

export default AddTaskBar;
