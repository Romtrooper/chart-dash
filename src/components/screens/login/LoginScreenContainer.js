import { connect } from 'react-redux';
import { login } from '../../../modules/core/CoreActions';


import LoginScreen from './LoginScreen';


function mapStateToProps(state) {
	const { connected, error } = state.core.connection;

	return {
		connected,
		error,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSubmit(username, password) {
			return dispatch(login(username, password));
		},
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
