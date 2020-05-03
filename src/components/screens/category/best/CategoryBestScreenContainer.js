import { connect } from 'react-redux';

import { fetchBestCategoryDatas } from '../../../../modules/category/CategoryActions';

import CategoryBestScreen from './CategoryBestScreen';

function mapStateToProps(state) {
	const { core, category } = state;
	const period = [core.dateBegin, core.dateEnd].toString();

	return {
		dataText: core.dataText[core.language].top,
		data: category.bestData,
		dateBegin: core.dateBegin,
		dateEnd: core.dateEnd,
		period,
	};
}


function mapDispatchToProps(dispatch, ownProps) {
	return {
		fetchBestCategoryDatas() {
			dispatch(fetchBestCategoryDatas(ownProps.topType, ownProps.service));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBestScreen);
