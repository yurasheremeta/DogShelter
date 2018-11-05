
export const GET_IMAGES = 'GET_IMAGES';


export const getImages = value => ({
  type: GET_IMAGES,
  value,
});


// export const getBreeds = num => (dispatch) => {
//   //    this.setState({ isLoading: true });
// //   console.log('dddddedede');
//   //ApiClient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breeds) => {
//   // console.log('resp: ', responce);
//   dispatch(getImages());
//     // const photo = breeds.message;
//     // this.setState({ breeds: photo, isLoading: false });
//   //});
// };

// export const getBreeds = () => async (dispatch) => {
//     //    this.setState({ isLoading: true });
//     console.log('dddddedede');
//     const responce = await ApiClient.get('https://dog.ceo/api/breeds/image/random/'); // .then((breeds) => {
//     console.log('resp: ', responce);
//     dispatch(getImages(responce));
//   };
// export const getBreeds = (dispatch) => {
//   ApiClient.get(`https://dog.ceo/api/breeds/image/random/${3}`).then((breeds) => {
//     dispatch(getImages(breeds));
//   });
// };
