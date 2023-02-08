import { Circles } from 'react-loader-spinner';
// import { CSSProperties } from 'react';

const Loader = () => {
	return (
		<div>
			<Circles
				height='80'
				width='80'
				color='#F0F0F0'
				ariaLabel='circles-loading'
				visible={true}
			/>
		</div>
	);
};

export default Loader;
