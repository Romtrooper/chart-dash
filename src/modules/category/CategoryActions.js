import CATEGORY from './CategoryConstants';
import { fetchDatas, fetchBestDatas } from './CategoryClient';

function fetchCategoryDatas(category) {
	return (dispatch, getState) => {

		const { dateBegin, dateEnd } = getState().core;

		dispatch({ type: CATEGORY.FETCH });

		return fetchDatas(category, dateBegin, dateEnd)
			.then(data => {

				const agregaTedLabels = ['clicks', 'impressions', 'ctr', 'cpc'];
				const agregatedDatas = data[0].reduce((acc, curr, index) => {
					acc[agregaTedLabels[index]] = curr;
					return acc;
				}, {});

				const rawDatas = data[1];
				const formatedData = {
					agregated: agregatedDatas,
					raw: rawDatas,
				};


				dispatch({
					type: CATEGORY.FETCH_SUCCESS,
					payload: {
						data: formatedData,
					},
				});

				return data;

			})
			.catch(error => {
				dispatch({
					type: CATEGORY.FETCH_ERROR,
					error,
				});
			});
	};
}

function fetchBestCategoryDatas(type, category) {
	return (dispatch, getState) => {

		const { dateBegin, dateEnd } = getState().core;

		dispatch({ type: CATEGORY.FETCH_BEST });

		return fetchBestDatas(type, category, dateBegin, dateEnd)
			.then(data => {

				dispatch({
					type: CATEGORY.FETCH_BEST_SUCCESS,
					payload: { data },
				});

				return data;

			})
			.catch(error => {
				dispatch({
					type: CATEGORY.FETCH_BEST_ERROR,
					error,
				});
			});
	};
}

export { fetchBestCategoryDatas, fetchCategoryDatas };