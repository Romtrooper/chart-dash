import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

import CategoryTableCards from './cards/CategoryTableCards';
import Spinner from '../../../ui/spinner/Spinner';

export default class CategoryTableScreen extends React.Component {
	componentDidMount() {
		this.props.fetchDatas(this.props.service);
	}

	componentDidUpdate(prevProps) {
		const {
			service,
			period,
			fetchDatas,
		} = this.props;

		if (service && (prevProps.service !== service)) {
			fetchDatas(service);
		}

		if (period && (prevProps.period !== period)) {
			fetchDatas(service);
		}


	}

	render() {
		if (!this.props.data) {
			return <Spinner />;
		}

		return (
			<>
				<CategoryTableCards
					cardsDatas={Object.values(this.props.data.agregated)}
					dataText={this.props.dataText}
				/>
				<Table
					columns={this.props.tableColumns}
					dataSource={this.props.data.raw}
				/>
			</>
		);

	}
}

CategoryTableScreen.propTypes = {
	data: PropTypes.object,
	dataText: PropTypes.object.isRequired,
	tableColumns: PropTypes.array,
	fetchDatas: PropTypes.func.isRequired,
	service: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
};

CategoryTableScreen.defaultProps = {
	data: {},
	tableColumns: [],
};
