import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BreedsOverview from './BreedsOverview';

import {
  getImagesFOrOverview,
} from '../../actions/actions';
import { selectBreeds } from '../../selectors/selectors';


const mapStateToProps = state => ({
  isLoading: state.isLoading,
  breeds: selectBreeds(state),
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loadBreeds: getImagesFOrOverview,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BreedsOverview);
