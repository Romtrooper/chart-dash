
import { connect } from 'react-redux';

import { changeDate } from '../../../modules/core/CoreActions';

import DateSelector from './DateSelector';

function mapStateToProps(state) {
	return {
		dateBegin: state.core.dateBegin,
		dateEnd: state.core.dateEnd,
	};
}


function mapDispatchToProps(dispatch) {
	return {
		changeDate(dateBegin, dateEnd) {
			dispatch(changeDate(dateBegin, dateEnd));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
