
import { connect } from 'react-redux';
import fetchOverviewDatas from '../../../modules/overview/OverviewActions';

import OverviewScreen from './OverviewScreen';

function mapStateToProps(state) {
	return {
		data: state.overview.data,
		keyNumbers: state.overview.keyNumbers,
		dataText: state.core.dataText[state.core.language].home,
		loaded: state.overview.loaded,
	};
}


function mapDispatchToProps(dispatch) {
	return {
		fetchDatas() {
			dispatch(fetchOverviewDatas());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewScreen);
