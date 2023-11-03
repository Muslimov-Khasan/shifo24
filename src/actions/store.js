// store.js
import { createStore } from "redux";

const initialState = {
  formData: null,
};

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

const store = createStore(reducer);
export default store;