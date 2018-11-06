import ApiClient from '../services/ApiClient';

export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGE_OVERVIEW = 'GET_IMAGE_OVERVIEW';
export const RESET_DISPLAY_AMOUNT = 'RESET_DISPLAY_AMOUNT';

export const GET_BREEDS = 'GET_BREEDS';
export const GET_MORE_BREEDS = 'GET_MORE_BREEDS';

export const REQUEST_BREEDS = 'GET_BREEDS_PENDING';
export const RECEIVE_BREEDS = 'GET_BREEDS_FULFILLED';
export const ERROR_BREEDS = 'GET_BREEDS_REJECTED';
export const BREEDS_FULFILLED = 'BREEDS_FULFILLED';
export const GET_MORE_BREEDS_FULFILLED = 'GET_MORE_BREEDS_FULFILLED';
export const GET_MORE_BREEDS_REJECTED = 'GET_MORE_BREEDS_REJECTED';
export const GET_MORE_BREEDS_PENDING = 'GET_BREEDS_PENDING';

export const IMAGE_AMOUNT = 'IMAGE_AMOUNT';

// export const getImages = value => ({
//   type: GET_IMAGES,
//   value,
// });

// export const showMore = () => ({
//   type: IMAGE_AMOUNT,
// });
export const getMoreBreeds = () => ({
  type: GET_MORE_BREEDS,
  payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3'),
});
export const getImages = () => ({
  type: GET_BREEDS,
  payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3'),
});
export const getImagesFOrOverview = value => ({
  type: GET_IMAGE_OVERVIEW,
  value,
});
