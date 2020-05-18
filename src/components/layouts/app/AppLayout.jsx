import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import AppHeader from '../../templates/header/HeaderContainer';
import Menu from '../../templates/menu/MenuContainer';

const { Header, Content } = Layout;

export default function AppTemplate({ children }) {
	return (
		<Layout style={{ height: '100%', minHeight: window.innerHeight }} >
			<Header>
				<AppHeader />
			</Header>
			<Layout>
				<Menu />
				<Layout style={{ padding: 30 }}>
					<Content style={{ background: '#fff' }}>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
}

AppTemplate.propTypes = {
	children: PropTypes.node.isRequired,
};
