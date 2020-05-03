import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Menu as AntMenu } from 'antd';
import { AppstoreOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

export default function Menu(props) {

	const {
		overview,
		campaigns,
		adgroups,
		ads,
		keywords,
	} = props.dataText;

	return (
		<AntMenu
			defaultSelectedKeys={['overview']}
			mode='inline'
			theme='dark'
		>
			<AntMenu.Item key='overview'>
				<AppstoreOutlined />
				<Link to='/overview'>{overview}</Link>
			</AntMenu.Item>
			<AntMenu.Item key='campaigns'>
				<InsertRowAboveOutlined />
				<Link to='/campaigns/category'>{campaigns}</Link>
			</AntMenu.Item>
			<AntMenu.Item key='adroups'>
				<InsertRowAboveOutlined />
				<Link to='/adgroups/category'>{adgroups}</Link>
			</AntMenu.Item>

			<AntMenu.Item key='ads'>
				<InsertRowAboveOutlined />
				<Link to='/ads/category'>{ads}</Link>
			</AntMenu.Item>
			<AntMenu.Item key='keywords'>
				<InsertRowAboveOutlined />
				<Link to='/keywords/category'>{keywords}</Link>
			</AntMenu.Item>
		</AntMenu>
	);
}

Menu.propTypes = {
	dataText: PropTypes.object.isRequired,
};
