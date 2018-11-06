import ApiClient from '../services/ApiClient';

export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGE_OVERVIEW = 'GET_IMAGE_OVERVIEW';
export const RESET_DISPLAY_AMOUNT = 'RESET_DISPLAY_AMOUNT';

export const REQUEST_BREEDS = 'BREEDS_PENDING';
export const RECEIVE_BREEDS = 'BREEDS_FULFILLED';
export const ERROR_BREEDS = 'BREEDS_REJECTED';
export const BREEDS = 'BREEDS';

// export const getImages = value => ({
//   type: GET_IMAGES,
//   value,
// });

export const resetGallery = () => ({
  type: RESET_DISPLAY_AMOUNT,
});
export const getImages = () => ({
  type: BREEDS,
  payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3'),
});

// export const getImagesThunk = () => (dispatch) => {
//   dispatch(getImages());
// };

export const getImagesFOrOverview = value => ({
  type: GET_IMAGE_OVERVIEW,
  value,
});
