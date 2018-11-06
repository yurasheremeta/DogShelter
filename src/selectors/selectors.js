export const selectBreeds = (state) => {
  console.log(state);
  return state.breeds || [];
};
