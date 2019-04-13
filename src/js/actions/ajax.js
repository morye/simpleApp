require('es6-promise').polyfill();
require('isomorphic-fetch');

import { Url } from '../global/enum';
import types from './types';

const getUri = props => {
  let param;
  switch (props.type) {
    case types.FETCH_CURIOSITY:
      param = 'curiosity';
      break;
    case types.FETCH_OPPORTUNITY:
      param = 'opportunity';
      break;
    case types.FETCH_SPIRIT:
      param = 'spirit';
      break;
    default:
      param = 'curiosity';
  }
  return `${Url.api.photos}/${param}/photos?api_key=${Url.api.key}&sol=${props.sol}&page=${props.page}`;
}
export const Ajax = props => {
  return dispatch => {
    dispatch({ ...props, fetching: true });
    fetch(getUri(props))
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(data) {
            dispatch({ ...props, fetching: false, photos:data.photos });
        });
  }
}
