import { connect } from 'react-redux';

import Menu from './Menu';


function mapStateToProps(state) {
	return {
		dataText: state.core.dataText[state.core.language].header,
		connected: state.core.connection.connected,
	};
}

export default connect(mapStateToProps)(Menu);
