const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state, //Возьми старое значение из state
        items: action.payload, //Возьми свойство sortBy и добавь все что зранится в ACTION.PAYLOAD
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state, //Возьми старое значение из state
        isLoaded: action.payload
      };
  
    default:
      return state;
  }
  
  
  // if (action.type === "SET_PIZZAS") {
  //   //Берем состояние из initialState, его заменить, при этом взять старые свойства (...state), и заменить sortBy на новое значение
  //   return {
  //     ...state, //Возьми старое значение из state
  //     items: action.payload, //Возьми свойство sortBy и добавь все что зранится в ACTION.PAYLOAD
  //     isLoaded: true,
  //   };
  // }

};

export default pizzas;
