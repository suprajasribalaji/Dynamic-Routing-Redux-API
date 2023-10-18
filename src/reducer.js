import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from "./actions";

const initialState = {
    apiData: [],
    error: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA_SUCCESS":
        return {
          ...state,
          apiData: action.payload,
          error: null,
        };
      case "FETCH_DATA_ERROR":
        return {
          ...state,
          apiData: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };

export default Reducer;
