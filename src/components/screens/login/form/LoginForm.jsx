import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Form,
	Input,
	Button,
} from 'antd';

import './LoginForm.css';

export default function LoginForm({ onSubmit, error }) {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	return (
		<main className='LoginForm'>
			<Form
				initialValues={{ remember: true }}
				onFinish={() => onSubmit(login, password)}
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 8 }}
				onFinishFailed={e => console.log(e)}
			>
				<Form.Item
					label='Username'
					name='login'
					validateStatus={error && 'error'}
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input onChange={evt => setLogin(evt.target.value)} />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					help={ error && 'Password or username is wrong'}
					validateStatus={error && 'error'}
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password onChange={evt => setPassword(evt.target.value)} />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>

			</Form>
		</main>
	);
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	error: PropTypes.bool.isRequired,
};
