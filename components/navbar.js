import { useSelector } from 'react-redux';

const Navbar = () => {
	const state = useSelector((state) => state);

	if (typeof window === 'undefined') {
		console.log('-------NavbarServer: ', state);
	}
	return (
		<ul>
			{state?.locations?.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
};

export default Navbar;
