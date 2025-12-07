const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":

    const existingItem = state.items.find(item => item.id === payload.id) 

    if(existingItem) {
      return {
        ...state,
        items: state.items.map(item => 
          item.id === payload.id ? {...item, count: item.count + 1}: item
        ) 
      }
    }

    return {
      ...state,
      items: [...state.items, {...payload, count: 1}]
    }

    case 'INCREASE_COUNT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload ? {...item, count: item.count + 1} : item
        )
      }
    case 'DECREASE_COUNT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload ? {...item, count: Math.max(0, item.count - 1)} : item
        )
      }

    default:
      return state;
  }
};
