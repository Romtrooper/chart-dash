import React from 'react';
import PropTypes from 'prop-types';
import {
	Statistic,
	Typography,
	Row,
	Col,
	Tooltip,
} from 'antd';
import {
	PercentageOutlined,
	DollarOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';

import './CategoryTableCards.css';

const { Title } = Typography;


export default function CategoryTableCards({ cardsDatas, dataText }) {
	return (
		<Row className='CategoryTableCards' gutter={[48, 8]}>
			<Col span={6}>
				<div className='CategoryTableCards-card'>
					<Statistic
						title={<Title level={4}>{dataText.click}</Title>}
						value={cardsDatas[0]}
					/>
					<Tooltip className='CategoryTableCards-tooltip' title={dataText.clickTips}>
						<InfoCircleOutlined />
					</Tooltip>
				</div>
			</Col>

			<Col span={6}>
				<div className='CategoryTableCards-card'>
					<Statistic
						title={<Title level={4}>{dataText.impressions}</Title>}
						value={cardsDatas[1]}
					/>
					<Tooltip className='CategoryTableCards-tooltip' title={dataText.impressionsTips}>
						<InfoCircleOutlined />
					</Tooltip>
				</div>
			</Col>

			<Col span={6}>
				<div className='CategoryTableCards-card'>
					<Statistic
						title={<Title level={4}>{dataText.ctr}</Title>}
						value={cardsDatas[2]}
						suffix={<PercentageOutlined />}
					/>
					<Tooltip className='CategoryTableCards-tooltip' title={dataText.clickTips}>
						<InfoCircleOutlined />
					</Tooltip>
				</div>
			</Col>

			<Col span={6}>
				<div className='CategoryTableCards-card'>
					<Statistic
						title={<Title level={4}>{dataText.cpc}</Title>}
						value={cardsDatas[3]}
						suffix={<DollarOutlined />}
					/>
					<Tooltip className='CategoryTableCards-tooltip' title={dataText.cpcTips}>
						<InfoCircleOutlined />
					</Tooltip>
				</div>
			</Col>
		</Row>
	);
}


CategoryTableCards.propTypes = {
	cardsDatas: PropTypes.array.isRequired,
	dataText: PropTypes.object.isRequired,
};
