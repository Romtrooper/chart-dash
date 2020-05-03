import React from 'react';
import PropTypes from 'prop-types';

import {
	List,
	Row,
	Col,
	Typography,
} from 'antd';


const { Text } = Typography;

export default function ChartTemplate(props) {
	return (
		<Row gutter={[16, 16]}>
			<Col offset={1} span={14}>
				{props.children}
			</Col>
			<Col offset={1} span={6}>
				<List
					header={<Text strong>{props.infoTitle}</Text>}
					bordered
					dataSource={props.dataSource}
					renderItem={item => <List.Item>{item}</List.Item>}
				/>
			</Col>
		</Row>
	);
}

ChartTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	dataSource: PropTypes.array.isRequired,
	infoTitle: PropTypes.string.isRequired,
};
