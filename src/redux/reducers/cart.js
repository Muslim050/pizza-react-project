const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");

  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};
const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [
            ...state.items[action.payload.id].items, //берутся все старые значения из state
            action.payload, //добавляем новый объект
          ];
      const newItems = {
        ...state.items,
        //пошел в state > items из items взял id => создал новый массив
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state, //Возьми старое значение из state
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "REMOVE_CART_ITEM": {
      const newItems = {
        //сгенерировал объект всех пиц
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice; // Узнал перед удалением пиццы сколько total Price у нее
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload]; //Удалил пиццу
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const newObjectItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjectItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};

export default cart;
