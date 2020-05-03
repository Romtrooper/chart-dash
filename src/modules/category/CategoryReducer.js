import CATEGORY from './CategoryConstants';

const initialState = {
	tableData: null,
	bestData: null,
	loaded: false,
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case CATEGORY.FETCH: {
		return {
			...state,
			tableData: null,
			loaded: false,
		};
	}

	case CATEGORY.FETCH_SUCCESS: {
		return {
			...state,
			tableData: action.payload.data,
			loaded: true,
		};
	}

	case CATEGORY.FETCH_BEST: {
		return {
			...state,
			bestData: null,
			loaded: false,
		};
	}

	case CATEGORY.FETCH_BEST_SUCCESS: {
		return {
			...state,
			bestData: action.payload.data,
			loaded: true,
		};
	}
	default:
		return state;
	}
};
