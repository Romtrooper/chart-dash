import moment from 'moment';

import dataText from '../../assets/lang/index';

import CORE from './CoreConstants';


const initialState = {
	connection: {
		connected: false,
		error: false,
	},
	language: 'en',
	dataText,
	dateBegin: moment().subtract(1, 'week').format('YYYY-MM-DD'),
	dateEnd: moment().format('YYYY-MM-DD'),
};


export default (state = initialState, action = {}) => {
	switch (action.type) {

	case CORE.CHANGE_LANGUAGE: {
		return {
			...state,
			language: action.payload.language,
		};
	}

	case CORE.CHANGE_DATE: {
		return {
			...state,
			dateBegin: action.payload.dateBegin,
			dateEnd: action.payload.dateEnd,
		};
	}

	case CORE.LOGIN_SUCCESS: {
		return {
			...state,
			connection: { 
				connected: true,
				error: false,
			},
		};
	}

	case CORE.LOGIN_ERROR: {
		return {
			...state,
			connection: {
				connected: false,
				// error: action.error,
				error: true,
			},
		};
	}

	case CORE.LOGOUT_SUCCESS: {
		return {
			...state,
			...initialState,
		};
	}


	default:
		return state;
	}
};
