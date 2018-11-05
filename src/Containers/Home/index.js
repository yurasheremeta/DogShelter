import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

import {
  getImages,
} from '../../store/actions';
import { selectBreeds } from '../../store/selectors';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  breeds: selectBreeds(state),
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loadBreeds: getImages,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
