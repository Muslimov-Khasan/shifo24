import { createStore } from "redux";

// Define the initial state
const initialState = {
  formData: null,
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;