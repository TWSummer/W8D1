import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import _ from 'lodash';

const defaultState = [];

export const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState =  action.errors.responseJSON;
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
