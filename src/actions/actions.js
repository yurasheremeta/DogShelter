import ApiClient from '../services/ApiClient';

export const REQUEST_BREEDS = 'REQUEST_BREEDS';
export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const IMAGE_AMOUNT = 'IMAGE_AMOUNT';

export const requestBreeds = () => ({
  type: REQUEST_BREEDS,
});

export const receiveBreeds = json => ({
  type: RECEIVE_BREEDS,
  breeds: json.message,
});

export const showMore = () => ({
  type: IMAGE_AMOUNT,
});

export const getBreeds = () => async (dispatch) => {
  dispatch(requestBreeds());
  //    this.setState({ isLoading: true });

  const responce = await ApiClient.get('https://dog.ceo/api/breeds/image/random/'); // .then((breeds) => {
  //    console.log(breeds);

  // const photo = breeds.message;
  // this.setState({ breeds: photo, isLoading: false });
  setTimeout(() => dispatch(receiveBreeds(responce)), 1000);
};
