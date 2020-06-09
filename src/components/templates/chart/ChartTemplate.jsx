import React from 'react';
import PropTypes from 'prop-types';

import {
	List,
	Row,
	Col,
	Typography,
} from 'antd';

const { Text } = Typography;

export default function ChartTemplate({children, infoTitle, dataSource}) {
	return (
		<Row>
			<Col xs={24} md={14}>
				{children}
			</Col>
			<Col xs={24} md={{ span: 8, offset: 2 }}>
				<List
					header={<Text strong>{infoTitle}</Text>}
					bordered
					dataSource={dataSource}
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
