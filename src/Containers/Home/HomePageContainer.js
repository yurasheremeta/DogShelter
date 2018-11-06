import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

import {
  getImages,
  getImagesFOrOverview,
} from '../../actions/actions';
import { selectBreeds } from '../../selectors/selectors';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  breeds: selectBreeds(state),
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  getImages,
  getImagesFOrOverview,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
