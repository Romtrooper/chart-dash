import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './modules/store';

import Routes from './RoutesContainer';
import AppLayout from './components/layouts/app/AppLayout';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<AppLayout>
					<Routes />
				</AppLayout>
			</Router>
		</Provider>
	);
}

export default hot(App);
