import React from 'react';
import PropTypes from 'prop-types';

import { Button, Select } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Header({ changeLanguage, logout}) {
	return (
		<>
			<Select
				key='select'
				defaultValue='en'
				onChange={changeLanguage}
			>
				<Option value='en'>English</Option>
				<Option value='fr'>Français</Option>
			</Select>,
			<Button
				key='button'
				icon={<LogoutOutlined />}
				onClick={logout}
			>
				Logout
			</Button>,
		</>
	);
}

Header.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
};
