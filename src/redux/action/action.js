export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const increaseCount = (id) => ({
  type: INCREASE_COUNT,
  payload: id,
});

export const decreaseCount = (id) => ({
  type: DECREASE_COUNT,
  payload: id,
});