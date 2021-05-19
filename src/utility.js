export const isIdPresentinArrayofObjects = (array, id) => {
  for (let itemOfArray of array) {
    if (itemOfArray.id === id) {
      return true;
    }
  }
  return false;
};
