export const barData = (labels, title, datasets) => ({
	labels,
	datasets: [
		{
			label: title,
			backgroundColor: 'rgba(61,52,139,0.9)',
			borderColor: 'rgba(61,52,139,0.9)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(61,52,139,0.7)',
			data: datasets,
		},
	],
});

export const barOptions = {
	tooltips: {
		enabled: true,
		titleFontColor: '#ffffff',
	},
	title: {
		display: false,
		text: '',
	},
	legend: {
		display: false,
	},
	scales: {
		xAxes: [{
			ticks: {
				beginAtZero: true,
			},
		}],
	},
};

export const dougData = (labels, datasets) => ({
	labels,
	datasets: [{
		data: datasets,
		backgroundColor: [
			'#3D348B',
			'#F7B801',
			'#F35B04',
			'#cfcfcf',
			'#FF0000',
		],
		hoverBorderColor: [
			'#3D348B',
			'#F7B801',
			'#F35B04',
			'#cfcfcf',
			'#FF0000',
		],
	}],
});


export const horizBarData = (labels, title, datasets) => ({
	labels,
	datasets: [
		{
			label: title,
			backgroundColor: 'rgba(237,128,33,0.9)',
			borderColor: 'rgba(237,128,33,0.9)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(237,128,33,0.7)',
			data: datasets,
		},
	],
});
export const horizBarOptions = {
	tooltips: {
		enabled: true,
		titleFontColor: '#ffffff',
	},
	title: {
		display: false,
		text: '',
	},
	legend: {
		display: false,
	},
	scales: {
		xAxes: [{
			ticks: {
				beginAtZero: true,
			},
			gridLines: {
				offsetGridLines: true,
			},
		}],
	},
};

export const pieData = (labels, datasets) => ({
	labels,
	datasets: [{
		data: datasets,
		backgroundColor: [
			'#3D348B',
			'#F7B801',
			'#F35B04',
			'#cfcfcf',
			'#FF0000',
		],
		hoverBorderColor: [
			'#3D348B',
			'#F7B801',
			'#F35B04',
			'#cfcfcf',
			'#FF0000',
		],
	}],
});
