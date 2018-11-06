import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

import {
  getImages,
  getMoreBreeds,
} from '../../actions/actions';
import { selectBreeds } from '../../selectors/selectors';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  breeds: selectBreeds(state),
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  getImages,
  getMoreBreeds,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
