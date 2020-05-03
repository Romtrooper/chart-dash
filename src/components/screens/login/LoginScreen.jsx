import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

import LoginForm from './form/LoginForm';

export default class LoginScreen extends React.Component {
	static propTypes = {
		connected: PropTypes.bool.isRequired,
		error: PropTypes.bool.isRequired,
		history: PropTypes.object.isRequired,
		onSubmit: PropTypes.func.isRequired,
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.connected && this.props.connected) {
			return this.props.history.push('/overview');
		}
	}

	render() {

		if (this.props.connected) {
			return (
				<Result
					status='success'
					title='Logged in'
					extra={[
						<Link to='/overview'>
							<Button type='primary' key='1'>Explore</Button>
						</Link>,
					]}
				/>);
		}

		return <LoginForm error={this.props.error} onSubmit={this.props.onSubmit} />;
	}
}
