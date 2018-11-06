import {

  REQUEST_BREEDS,
  ERROR_BREEDS,
  RECEIVE_BREEDS,
  GET_MORE_BREEDS_FULFILLED,
} from '../actions/actions';

const initialState = {
  isLoading: false,
  breeds: [],
  minDisplayAmount: 3,
};

function getImages(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case REQUEST_BREEDS:
      return ({
        ...state,
        isLoading: true,
      });
    case RECEIVE_BREEDS: {
      console.log('ACTIPN: ', action.payload);
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
    case GET_MORE_BREEDS_FULFILLED:
      return ({
        ...state,
        breeds: state.breeds.concat(action.payload.message),
      });
    default:
      return state;
  }
}
export default getImages;
