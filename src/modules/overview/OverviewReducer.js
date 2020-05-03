import OVERVIEW from './OverviewConstants';

const initialState = {
	data: null,
	keyNumbers: null,
	loaded: false,
};


export default (state = initialState, action = {}) => {
	switch (action.type) {
	case OVERVIEW.FETCH_SUCCESS: {
		return {
			...state,
			data: action.payload.data,
			keyNumbers: action.payload.keyNumbers,
			loaded: true,
		};
	}
	case OVERVIEW.FETCH: {
		return {
			...state,
			data: null,
			keyNumbers: null,
			loaded: false,
		};
	}
	default:
		return state;
	}
};
