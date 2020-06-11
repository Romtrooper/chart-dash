import OVERVIEW from './OverviewConstants';
import fetchDatas from './OverviewClient';

function fetchOverviewDatas() {
	return (dispatch, getState) => {

		const { dateBegin, dateEnd } = getState().core;

		dispatch({ type: OVERVIEW.FETCH });

		return fetchDatas(dateBegin, dateEnd)
			.then(data => {

				const labels = ['Campaign', 'Ad group', 'Headline 2', 'Keywords'];
				const categories = ['campaigns', 'adgroups', 'ads', 'keywords'];

				// keyNumbers calculated from backend
				const keyNumbers = data[4];

				const formatedData = data.reduce((acc, curr, index) => {
					if (index > 3) {
						return acc;
					}

					acc[categories[index]] = {
						data: curr,
						labels: curr.map(value => value[labels[index]]),
						dataSet: curr.map(value => value.Clicks),
					};
					return acc;
				}, {});

				dispatch({
					type: OVERVIEW.FETCH_SUCCESS,
					payload: {
						data: formatedData,
						keyNumbers,
					},
				});

				return data;

			})
			.catch(error => {
				console.log(error);
				dispatch({
					type: OVERVIEW.FETCH_ERROR,
					error,
				});
			});
	};
}

export default fetchOverviewDatas;