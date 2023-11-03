import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the form data from localStorage
    const formData = JSON.parse(localStorage.getItem("formData"));

    // If the form data doesn't exist or the user is not logged in, navigate to the login page
    if (!formData || !formData.isLoggedIn) {
      navigate("/");
    }

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