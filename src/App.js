import "./App.css"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Home/Home";
import Login from "./pages/login/login";
import FormDataProvider from "./context/FormDataContext";

function App() {
  return (
    <FormDataProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Foydalanuvchilar" element={<Header />} />
      </Routes>
    </FormDataProvider>
  );
}

export default App;
