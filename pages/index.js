import { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '../store/index';
import Navbar from '../components/navbar';

function Home(props) {
	const { locations } = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log('---locations: ', locations);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			console.log('---useEffect locations in browser: ', locations);
		}
	}, [locations]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			dispatch({ type: 'LOCATIONS_UPDATED', payload: { location: { id: 3, name: 'Iran' } } });
		}
	}, [dispatch]);

	return (
		<div>
			<Link href="/demo">
				<a>Navigate to Demo</a>
			</Link>

			{/* {locations.map((item) => (
				<div key={item.id}>{item.name}</div>
			) ) } */}
			<Navbar />
		</div>
	);
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
	console.log('----------------------HOME----------------------------');
	console.log('---getStaticProps: ', store.getState());

	// think you got it from api
	const locations = [
		{ id: 1, name: 'Afghanistan' },
		{ id: 2, name: 'Turkey' },
	];

	store.dispatch({ type: 'LOCATIONS_RECEIVED', payload: { locations } });
	return {
		props: {},
	};
});

export default Home;
