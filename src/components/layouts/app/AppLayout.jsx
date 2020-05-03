import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import AppHeader from '../../templates/header/HeaderContainer';
import Menu from '../../templates/menu/MenuContainer';

const {
	Header,
	Sider,
	Content,
} = Layout;

export default function AppTemplate(props) {
	return (
		<Layout style={{ height: '100%', minHeight: window.innerHeight }} >
			{/* style={{minHeight:"100vh"}} */}
			<Header>
				<AppHeader />
			</Header>
			<Layout>
				<Sider>
					<Menu />
				</Sider>
				<Layout style={{ padding: 30 }}>
					<Content style={{ background: '#fff' }}>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
}

AppTemplate.propTypes = {
	children: PropTypes.node.isRequired,
};
