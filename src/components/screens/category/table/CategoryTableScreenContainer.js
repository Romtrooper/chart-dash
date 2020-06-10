import { connect } from 'react-redux';

import { fetchCategoryDatas } from '../../../../modules/category/CategoryActions';

import CategoryTableScreen from './CategoryTableScreen';

function mapStateToProps(state, ownProps) {
	const { core, category } = state;
	const { tableData } = category;

	const dataText = core.dataText[core.language][ownProps.service];
	const period = [core.dateBegin, core.dateEnd].toString();

	const dataSourceKeys = tableData ? Object.keys(tableData.raw[0]) : null;
	const tableColumns = dataSourceKeys ?
		[dataText.groupeType, ...dataText.table].reduce((acc, curr, index) => {
			const column = {
				title: curr,
				dataIndex: dataSourceKeys[index],
				key: dataSourceKeys[index],
			};

			acc.push(column);
			return acc;
		}, []) :
		null;

	return {
		data: tableData,
		dataText: dataText.cards,
		tableColumns,
		period,
	};
}


function mapDispatchToProps(dispatch) {
	return {
		fetchDatas(service) {
			dispatch(fetchCategoryDatas(service));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTableScreen);
