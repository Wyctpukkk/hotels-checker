const initial = {
  hotels: [],
  location: '',
  checkIn: '',
  checkOut: '',
  count: '',
  favor: [],
  slider: [
    require('../../img/slider1.png'),
    require('../../img/slider2.png'),
    require('../../img/slider3.png'),
    require('../../img/slider1.png'),
  ],
  user: '',
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

    case 'SORT_FAVOR': {
      return {
        ...state,
      };
    }

    case 'SORT_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: action.payload,
      };
    }

    case 'SET_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }

    case 'CHECK_USER': {
      return {
        ...state,
      };
    }

    case 'CHECK_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
      };
    }

    case 'DEL_USER': {
      return {
        ...state,
        user: '',
      };
    }

    default:
      return state;
  }
}
