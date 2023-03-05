const initial = {
  hotels: [],
  location: '',
  checkIn: '',
  checkOut: '',
  count: '',
  favor: [],
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'LOAD_HOTELS': {
      const { location, checkIn, checkOut, count } = action.payload;

      return {
        ...state,
        location,
        checkIn,
        checkOut,
        count,
      };
    }
    case 'LOAD_HOTELS_SUCCESS': {
      return {
        ...state,
        hotels: action.payload,
      };
    }
    case 'ADD_FAVOR': {
      return {
        ...state,
      };
    }
    case 'ADD_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: [...state.favor, action.payload],
      };
    }
    case 'DEL_FAVOR': {
      return {
        ...state,
      };
    }
    case 'DEL_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: action.payload,
      };
    }

    default:
      return state;
  }
}
