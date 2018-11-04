import {
  REQUEST_BREEDS,
  RECEIVE_BREEDS,
  IMAGE_AMOUNT,
} from '../actions/actions';

function getImages(state = {
  isLoading: false,
  breeds: [],
  imagesAmount: 3,
}, action) {
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        isLoading: true,
        breeds: [],
      });
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        isLoading: false,
        breeds: action.breeds,
      });
    case IMAGE_AMOUNT:
      return Object.assign({}, state, {
        imagesAmount: state.imagesAmount + 3,
      });
    default:
      return state;
  }
}
export default getImages;
