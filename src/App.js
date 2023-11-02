import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Login from './pages/login/login';

function App() {
  const [formData, setFormData] = useState(null);

  const handleLogin = (data) => {
    // Save the form data in the state
    setFormData(data);
  };

  return (
    <>
      {formData ? (
        <Header formData={formData} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;