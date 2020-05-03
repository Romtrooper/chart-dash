import CORE from './CoreConstants';

import * as CoreClient from './CoreClient';


export function login(username, password) {
	return (dispatch) => {

		dispatch({ type: CORE.LOGIN });

		return CoreClient.login(username, password)
			.then(response => {

				dispatch({ type: CORE.LOGIN_SUCCESS });

				return response;

			})
			.catch(error => {
				dispatch({
					type: CORE.LOGIN_ERROR,
					error,
				});
			});
	};
}

export function logout() {
	return (dispatch) => {

		dispatch({ type: CORE.LOGOUT });

		return CoreClient.logout()
			.then(response => {
				dispatch({ type: CORE.LOGOUT_SUCCESS });
				return response;
			})
			.catch(error => {
				dispatch({
					type: CORE.LOGOUT_ERROR,
					error,
				});
			});
	};
}


export function checkAppCredentials() {
	return (dispatch) => {
		dispatch({ type: CORE.LOGIN });

		return CoreClient.checkCredentials()
			.then(response => {

				dispatch({ type: CORE.LOGIN_SUCCESS });

				return response;

			})
			// No need to dispatch error when not alreandy logged
			.catch(error => dispatch({ type: CORE.LOGOUT_SUCCESS }));
	};
}

export const changeDate = (dateBegin, dateEnd) => ({
	type: CORE.CHANGE_DATE,
	payload: {
		dateBegin,
		dateEnd,
	},
});

export const changeLanguage = (value) => ({
	type: CORE.CHANGE_LANGUAGE,
	payload: { language: value },
});
