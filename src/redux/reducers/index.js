const initial = {
  hotels: [],
  location: '',
  checkIn: '',
  checkOut: '',
  count: '',
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'LOAD_HOTELS': {
      const { location, checkIn, checkOut } = action.payload;

      return {
        ...state,
        location,
        checkIn,
        checkOut,
      };
    }
    case 'LOAD_HOTELS_SUCCESS': {
      return {
        ...state,
        hotels: action.payload,
      };
    }

    default:
      return state;
  }
}
