// Header.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      {formData && (
        <div>
          <p>IP Address: {formData.ipAddress}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Header;