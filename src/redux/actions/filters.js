export const setSortBy = ({type, order}) => ({
  //Получает значение (), т это значение будет передаваться в объект
  type: "SET_SORT_BY",
  payload: {type, order},
});

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
