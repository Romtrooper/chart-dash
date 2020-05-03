import React from 'react';

import {
	HorizontalBar,
	Doughnut,
	Pie,
	Line,
	Polar,
} from 'react-chartjs-2';

import {
	horizBarData,
	horizBarOptions,
	lineData,
	lineOptions,
	setData,
} from './config';


export const getTopChart = (topType, labels, datasets, title) => {
	switch (topType) {
	case 'clicks':
		return <HorizontalBar data={horizBarData(labels, title, datasets)} options={horizBarOptions} />;


	case 'cpc':
		return <Line data={lineData(labels, title, datasets)} options={lineOptions} />;


	case 'impressions':
		return <Doughnut data={setData(labels, datasets)} />;

	case 'cost':
		return <Pie data={setData(labels, datasets)} />;

	case 'conversions':
		return <Polar data={setData(labels, datasets)} />;

	default:
		return null;
	}
};
