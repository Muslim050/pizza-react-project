const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }, //Сортировка по
};

const filters = (state = initialState, action) => {
  //Что прилетает нам в ACTION
  // action = {
  //   type: 'SET_SORT_BY',
  //   payload: 'price'
  // }

  if (action.type === "SET_SORT_BY") {
    //Берем состояние из initialState, его заменить, при этом взять старые свойства (...state), и заменить sortBy на новое значение
    return {
      ...state, //Возьми старое значение из state
      sortBy: action.payload, //Возьми свойство sortBy и добавь все что зранится в ACTION.PAYLOAD
    };
  }

  if (action.type === "SET_CATEGORY") {
    //Берем состояние из initialState, его заменить, при этом взять старые свойства (...state), и заменить sortBy на новое значение
    return {
      ...state, //Возьми старое значение из state
      category: action.payload, //Возьми свойство sortBy и добавь все что зранится в ACTION.PAYLOAD
    };
  }
  return state;
};

export default filters;
