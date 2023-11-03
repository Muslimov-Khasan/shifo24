import React from "react";
import { Provider } from "react-redux";
import store from "../actions/store";

function FormDataProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default FormDataProvider;