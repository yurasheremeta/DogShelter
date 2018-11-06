import {
  // GET_IMAGES,
  //  GET_IMAGE_OVERVIEW,
  REQUEST_BREEDS,
  // RECEIVE_BREEDS,
  ERROR_BREEDS,
  BREEDS,
} from '../actions/actions';
// import store from '../store/configureStore';

const initialState = {
  isLoading: false,
  breeds: [],
};

function getImages(state = initialState, action) {
   console.log(action);
  switch (action.type) {
    case REQUEST_BREEDS:
      // console.log(action.payload);
      return ({
        ...state,
        isLoading: true,
        breeds: [],
      });
    case BREEDS: {
      // console.log(action.payload);
      return ({
        ...state,
        isLoading: false,
        breeds: action.payload.message,
      });
    }
    case ERROR_BREEDS:
      return ({
        ...state,
        isLoading: false,
        breeds: [],
      });
    // case BREEDS: {
    //   return ({
    //     ...state,
    //     breeds: action.payload.message,
    //   });
    // }
    // case GET_IMAGE_OVERVIEW:
    //   return ({
    //     ...state,
    //     breeds: action.value.message,
    //   });
    default:
      return state;
  }
}
export default getImages;
