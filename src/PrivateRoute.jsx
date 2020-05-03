
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({
	component: Component,
	path,
	connected,
	exact,
}) {
	return (
		<Route
			exact={exact}
			path={path}
			render={connected ?
				props => <Component {...props} /> :
				() => <Redirect to='/' />
			}
		/>
	);
}

PrivateRoute.propTypes = {
	exact: PropTypes.bool,
	path: PropTypes.string.isRequired,
	connected: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
	exact: false,
};
