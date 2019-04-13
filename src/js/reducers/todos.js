// import * as _ from "lodash";
import { combineReducers } from 'redux';
import types from '../actions/types';

const todo = (state = {
	fetching: false,
	sol: 1000,
	page: 1,
	photos: [],
	number: 0
}, action) => {
	switch (action.type) {
		case types.FETCH_CURIOSITY:
			return { ...state, number: 0, fetching:action.fetching, page:action.page || 1, photos:action.photos || []}
		case types.FETCH_OPPORTUNITY:
			return { ...state, number: 0, fetching:action.fetching, page:action.page || 1, photos:action.photos || []}
		case types.FETCH_SPIRIT:
			return { ...state, number: 0, fetching:action.fetching, page:action.page || 1, photos:action.photos || []}
		case types.SLIDE_LEFT:
			return { ...state, number: state.number > 0 ? state.number - 1 : state.number };
		case types.SLIDE_RIGHT:
			return { ...state, number: state.number < state.photos.length - 1 ? state.number + 1 : state.number };
		default:
			return state;
	}
}

export default combineReducers({
  todo
});
