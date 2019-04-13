import types from './types';
import { Ajax } from './ajax';

export const fetchCuriosity = (props) => {
	return Ajax({ type: types.FETCH_CURIOSITY, sol:props.sol, page:props.page });
};

export const fetchOpportunity = (props) => {
	return Ajax({ type: types.FETCH_OPPORTUNITY, sol:props.sol, page:props.page });
};

export const fetchSpirit = (props) => {
	return Ajax({ type: types.FETCH_SPIRIT, sol:props.sol, page:props.page });
};

export const slideLeft = props => {
	return { type: types.SLIDE_LEFT }
}

export const slideRight = props => {
	return { type: types.SLIDE_RIGHT }
}
