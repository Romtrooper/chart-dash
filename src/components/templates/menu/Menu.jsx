import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Menu as AntMenu, Layout } from 'antd';
import { AppstoreOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

export default function Menu({ dataText, connected }) {

	const {
		overview,
		campaigns,
		adgroups,
		ads,
		keywords,
	} = dataText;

	return (
		<Layout.Sider collapsed={!connected} collapsedWidth='0'>
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
		</Layout.Sider>
	);
}

Menu.propTypes = {
	dataText: PropTypes.object.isRequired,
	connected: PropTypes.bool.isRequired,
};
