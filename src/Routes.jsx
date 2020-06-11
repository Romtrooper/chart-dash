
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Result } from 'antd';

import LoginScreen from './components/screens/login/LoginScreenContainer';
import OverviewScreen from './components/screens/overview/OverviewScreenContainer';
import CategoryScreen from './components/screens/category/CategoryScreenContainer';
import PrivateRoute from './PrivateRoute';

// import { withRouter } from 'react-router-dom';
// See https://tylermcginnis.com/react-router-cannot-get-url-refresh/

export default class Routes extends React.Component {

	componentDidMount() {
		this.props.checkCredentials();
	}


	render() {
		const { connected } = this.props;

		return (
			<Switch>
				<Route
					exact
					path='/'
					component={LoginScreen}
				/>

				<PrivateRoute
					exact
					path='/overview'
					connected={connected}
					component={OverviewScreen}
				/>

				<PrivateRoute
					exact
					path='/:service/:details'
					connected={connected}
					component={CategoryScreen}
				/>


				<Route
					render={() => {
						return (
							<Result
								status='404'
								title='404'
								subTitle='Sorry, the page you visited does not exist.'
								// extra={<Button type='primary'>Back Home</Button>}
							/>
						);
					}}
				/>
			</Switch>
		);
	}
}

Routes.propTypes = {
	checkCredentials: PropTypes.func.isRequired,
	connected: PropTypes.bool.isRequired,
};
