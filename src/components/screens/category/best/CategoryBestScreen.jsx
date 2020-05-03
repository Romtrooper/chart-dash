
import React from 'react';
import PropTypes from 'prop-types';

import { Spin } from 'antd';

import ChartTemplate from '../../../templates/chart/ChartTemplate';
import { getTopChart } from './tools';

export default class CategoryBestScreen extends React.Component {
	componentDidMount() {
		this.props.fetchBestCategoryDatas();
	}

	componentDidUpdate(prevProps) {
		const {
			period,
			topType,
			fetchBestCategoryDatas,
		} = this.props;

		if (topType !== prevProps.topType) {
			fetchBestCategoryDatas();
		}

		if (period && (prevProps.period !== period)) {
			fetchBestCategoryDatas();
		}
	}


	render() {
		if (!this.props.data) {
			return <Spin size='large' />;
		}

		// get matching text
		const {
			dataText,
			service,
			topType,
		} = this.props;

		const labels = this.props.data[0];
		const datasets = this.props.data[1];
		const data = this.props.data[2];

		const title = `Top ${service}`;
		const topChart = getTopChart(topType, labels, datasets, title);

		// format title
		const topTitle = service.charAt(0).toUpperCase() + service.slice(1);

		return (
			<ChartTemplate
				infoTitle={dataText.informations.title}
				dataSource={[
					`${data[0]}${topTitle}`,
					`${dataText.informations.average}${data[1]}`,
					`${dataText.informations.best}${data[2][0]}(${data[2][1]})`,
					`${dataText.informations.worst}${data[3][0]}(${data[3][1]})`,
				]}
			>
				{topChart}
			</ChartTemplate>
		);
	}
}

CategoryBestScreen.propTypes = {
	fetchBestCategoryDatas: PropTypes.func.isRequired,
	dataText: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
	topType: PropTypes.string.isRequired,
	service: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
};
