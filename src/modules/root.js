import { combineReducers } from 'redux';

import core from './core/CoreReducer';
import overview from './overview/OverviewReducer';
import category from './category/CategoryReducer';

const reducer = combineReducers({
	core,
	overview,
	category,
});

export default reducer;
