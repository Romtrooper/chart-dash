import { connect } from 'react-redux';

import { logout, changeLanguage } from '../../../modules/core/CoreActions';

import Header from './Header';

function mapDispatchToProps(dispatch) {
	return {
		changeLanguage(value) {
			dispatch(changeLanguage(value));
		},
		logout() {
			return dispatch(logout());
		},
	};
}

export default connect(null, mapDispatchToProps)(Header);
