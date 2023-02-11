import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<section
			className={`${classes.layout} ${props.className ? props.className : ''}`}
		>
			{props.children}
		</section>
	);
};

export default Layout;
