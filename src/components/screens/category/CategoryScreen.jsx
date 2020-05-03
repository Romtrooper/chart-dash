import React from 'react';
import PropTypes from 'prop-types';
import {
	Switch,
	Route,
	Link,
	useLocation,
} from 'react-router-dom';
import { Tabs } from 'antd';

import CategoryTableScreen from './table/CategoryTableScreenContainer';
import CategoryBestScreen from './best/CategoryBestScreenContainer';
import ContentLayout from '../../layouts/content/ContentLayout';

const { TabPane } = Tabs;

export default function CategoryScreen(props) {
	const { dataText, tabsContent } = props;
	const topType = new URLSearchParams(useLocation().search).get('type');
	const { service } = props.match.params;
	const topTypeText = topType ? `top by ${topType}` : 'overview';

	return (
		<ContentLayout title={`${dataText.groupeType}: ${topTypeText}`}>
			<Tabs
				className='CategoryScreen-tabs'
				defaultActiveKey='1'
				type='card'
			>
				<TabPane
					key='overview'
					tab={
						<Link to={`/${service}/category`}>
							{dataText.groupeType}
						</Link>
					}
				/>
				{['clicks', 'impressions', 'cpc', 'cost', 'conversions']
					.map(val => {
						return (
							<TabPane
								key={val}
								tab={
									<Link to={`/${service}/top?type=${val}`}>
										{tabsContent.top}{tabsContent[val]}
									</Link>
								}
							/>
						);
					})}

			</Tabs>
			<Switch>
				<Route
					path='/:service/category'
					render={() => <CategoryTableScreen service={service} />}
				/>
				<Route
					path='/:service/top'
					render={() => <CategoryBestScreen topType={topType} service={service} />}
				/>
			</Switch>
		</ContentLayout>


	);
}

CategoryScreen.propTypes = {
	dataText: PropTypes.object.isRequired,
	tabsContent: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
};
