import { connect } from 'react-redux';

import { checkAppCredentials } from './modules/core/CoreActions';

import Routes from './Routes';

function mapStateToProps(state) {
	return {
		connected: state.core.connection.connected,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		checkCredentials() {
			dispatch(checkAppCredentials());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
