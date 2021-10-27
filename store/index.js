// store.js

import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// create your reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		case 'LOCATIONS_RECEIVED':
			return { ...state, locations: action.payload.locations };
		case 'LOCATIONS_UPDATED':
			const updated = [...state.locations];
			updated.push(action.payload.location);
			return { ...state, locations: updated };
		default:
			return state;
	}
};

// create a makeStore function
const makeStore = (context) =>
	createStore(
		reducer,
		typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
