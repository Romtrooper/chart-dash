import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';
import DateSelector from '../../templates/date/DateSelectorContainer';

import './ContentLayout.css';

const { Title } = Typography;


export default function ContentLayout(props) {
	return (
		<main className='ContentLayout'>
			<div className='ContentLayout-top'>
				<Title>{props.title}</Title>
				<DateSelector />
			</div>
			{props.children}
		</main>
	);
}

ContentLayout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
