import { useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { wrapper } from '../store/index';

function Demo(props) {
	const { locations } = useSelector((state) => state);
	console.log('---locations: ', locations);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			console.log('---useEffect locations in browser: ', locations);
		}
	}, [locations]);

	return (
		<div>
			<Link href="/">
				<a>Back to Home</a>
			</Link>

			{locations?.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
	console.log('---------------DEMO------------------');
	console.log('---getStaticProps: ', store.getState());

	return {
		props: {},
	};
});

export default Demo;
