import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const loginUser = (user) => dispatch => {
  return login({user: user})
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const logoutUser = () => dispatch => {
  return logout()
    .then(
      (nullUser) => dispatch(receiveCurrentUser(nullUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const signupUser = (user) => dispatch => (
  signup({user: user})
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    )
);
