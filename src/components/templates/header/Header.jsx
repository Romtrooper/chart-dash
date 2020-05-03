import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Button, Select } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Header(props) {
	return (
		<PageHeader
			avatar={{ src: props.avatar }}
			extra={[
				<Select
					key='select'
					defaultValue='en'
					onChange={props.changeLanguage}
				>
					<Option value='en'>English</Option>
					<Option value='fr'>Français</Option>
				</Select>,
				<Button
					key='button'
					icon={<LogoutOutlined />}
					onClick={props.logout}
				>
					Logout
				</Button>,
			]}
		/>
	);
}

Header.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	avatar: PropTypes.string.isRequired,
};
