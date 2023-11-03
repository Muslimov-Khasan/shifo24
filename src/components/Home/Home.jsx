import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import Avtar from "../../assets/icon/avtar.svg";
import "./Home.scss";
import Navbar from "../Nav/Nav";

function Home() {
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
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Navbar />
            <SearchIcon className="search-icon" />
            <input
              placeholder="Qidirish"
              className="header-input"
              type="search"
            />
            <div className="header-inner">
              <img src={Avtar} alt="user" width="48" height="48" />
              {formData && (
                <div>
                  <p className="user-text">{formData.ipAddress}</p>
                </div>
              )}
            </div>
            <div className="box">
              <div className="user-wrapper">
                <h2 className="header-text">Foydalanuvchilar</h2>
                <button className="header-btn">Foydalanuvchi qo’shish +</button>
              </div>

              <section className="select-inner">
                <select>
                  <option value="Xodimlar">Xodimlar maqomi bo'yicha</option>
                </select>
                <select>
                  <option value="Xodimlar">
                    Superfoydalanuvchi holati bo'yicha
                  </option>
                </select>
                <select>
                  <option value="Xodimlar">Faol tomonidan</option>
                </select>
              </section>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;