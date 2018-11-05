import {
  GET_IMAGES,
//   RECEIVE_BREEDS,
//   IMAGE_AMOUNT,
} from './actions';

function getImages(state = {
  isLoading: false,
  breeds: [],
  // imagesAmount: 3,
}, action) {
  switch (action.type) {
    case GET_IMAGES: {
      console.log(action);

      return ({
        ...state,
        breeds: action.value.message,
      });
    }
    default:
      return state;
  }
}
export default getImages;
