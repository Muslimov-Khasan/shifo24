import React from "react";

function Header({ formData }) {
  // Use the form data in the header component
  console.log(formData);

  return (
    <header>
      Your header content here
    </header>
  );
}

export default Header;