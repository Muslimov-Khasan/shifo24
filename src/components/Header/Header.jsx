import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    // Retrieve the form data from localStorage
    const formData = JSON.parse(localStorage.getItem("formData"));

    // Use the form data in the header component
    console.log(formData);
  }, []);

  return (
    <header>
      Your header content here
    </header>
  );
}

export default Header;