import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (store, ownProps) => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
