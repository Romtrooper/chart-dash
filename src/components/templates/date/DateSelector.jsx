import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
	DatePicker,
	Button,
	Form,
} from 'antd';

import { RocketOutlined } from '@ant-design/icons';

export default class DateSelector extends React.Component {

	state = {
		dateBegin: '',
		dateEnd: '',
	}

	componentDidMount() {
		const { dateBegin, dateEnd } = this.props;
		this.setState({ dateBegin, dateEnd });
	}

	onChange = dataSet => {
		const [dateBegin, dateEnd] = dataSet;
		this.setState({ dateBegin, dateEnd });
	}

	onSubmit = () => {
		this.props.changeDate(this.state.dateBegin, this.state.dateEnd);
	}

	render() {
		const { dateBegin, dateEnd } = this.props;
		const dateFromat = 'YYYY-MM-DD';
		return (
			<Form onFinish={() => this.onSubmit()}>
				<DatePicker.RangePicker
					defaultValue={[moment(dateBegin, dateFromat), moment(dateEnd, dateFromat)]}
					onChange={(evt, dataSet) => this.onChange(dataSet)}
					disabledDate={current => current > moment()}
				/>
				<Button
					style={{ marginLeft: 8 }}
					type='primary'
					icon={<RocketOutlined />}
					htmlType='submit'
				/>
			</Form>
		);
	}
}
DateSelector.propTypes = {
	changeDate: PropTypes.func.isRequired,
	dateBegin: PropTypes.string.isRequired,
	dateEnd: PropTypes.string.isRequired,
};
