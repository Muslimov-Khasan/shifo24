import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/login/login";
import FormDataProvider from "./context/FormDataContext";

function App() {
  return (
    <FormDataProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
      </Routes>
    </FormDataProvider>
  );
}

export default App;
