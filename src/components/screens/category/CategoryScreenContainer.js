import { connect } from 'react-redux';

import CategoryScreen from './CategoryScreen';

function mapStateToProps(state, ownProps) {
	const { core } = state;
	const dataText = core.dataText[core.language][ownProps.match.params.service];

	return {
		dataText,
		tabsContent: core.dataText[core.language].categorySidebar,
	};
}

export default connect(mapStateToProps)(CategoryScreen);
