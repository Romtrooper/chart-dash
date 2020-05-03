import { connect } from 'react-redux';

import { logout, changeLanguage } from '../../../modules/core/CoreActions';

import Firebase from '../../../assets/images/firebase.png';

import Header from './Header';

function mapStateToProps(state) {
	return {
		avatar: Firebase,
	};
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
