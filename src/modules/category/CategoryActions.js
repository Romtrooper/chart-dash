import CATEGORY from './CategoryConstants';
import * as CategoryClient from './CategoryClient';
import dateConverter from '../../libs/dateConverter';


function fetchCategoryDatas(category) {
	return (dispatch, getState) => {

		const { dateBegin, dateEnd } = getState().core;

		// reformat for Node Adwords lib
		const dateBeginConverted = dateConverter(dateBegin);
		const dateEndConverted = dateConverter(dateEnd);

		dispatch({ type: CATEGORY.FETCH });

		return CategoryClient.fetchDatas(category, dateBeginConverted, dateEndConverted)
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

		// reformat for Node Adwords lib
		const dateBeginConverted = dateConverter(dateBegin);
		const dateEndConverted = dateConverter(dateEnd);

		dispatch({ type: CATEGORY.FETCH_BEST });

		return CategoryClient.fetchBestDatas(
			type,
			category,
			dateBeginConverted,
			dateEndConverted,
		)
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