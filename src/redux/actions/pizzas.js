import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  // Для получения пиц и сохранений
  axios
    .get(
      `http://localhost:3000/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )

    .then(({ data }) => {
      dispatch(setPizzas(data)); //сохранение
    });
};

export const setPizzas = (items) => ({
  //метод для сохранения пиц
  type: "SET_PIZZAS",
  payload: items,
});
