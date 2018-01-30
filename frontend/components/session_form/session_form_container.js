import SessionForm from './session_form';
import { connect } from 'react-redux';
import { loginUser, signupUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname === "/login" ? 'login' : 'signup'
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname === '/login') {
    processForm = (formUser) => dispatch(loginUser(formUser));
  } else {
    processForm = (formUser) => dispatch(signupUser(formUser));
  }
  return ({
    processForm
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
