import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import Avtar from "../../assets/icon/avtar.svg";
import "./Home.scss";
import Navbar from "../Nav/Nav";

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const storedTableData = localStorage.getItem("tableData");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      navigate("/");
    }

    if (storedTableData) {
      setTableData(JSON.parse(storedTableData));
    }
  }, [navigate]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      email,
      password,
    };
    setFormData(newUser);
    localStorage.setItem("formData", JSON.stringify(newUser));

    const newTableData = [...tableData, newUser];
    setTableData(newTableData);
    localStorage.setItem("tableData", JSON.stringify(newTableData));

    handleCloseModal();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTableData = tableData.filter((item) =>
    item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              value={searchQuery}
              onChange={handleSearch}
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
                <button
                  className="header-btn"
                  onClick={() => setShowModal(true)}
                >
                  Foydalanuvchi qo’shish +
                </button>
              </div>

              <section className="select-inner">
                <select className="select-type">
                  <option value="Xodimlar">Xodimlar maqomi bo'yicha</option>
                </select>
                <select className="select-type">
                  <option value="Xodimlar">
                    Superfoydalanuvchi holati bo'yicha
                  </option>
                </select>
                <select className="select-type">
                  <option value="Xodimlar">Faol tomonidan</option>
                </select>
              </section>
            </div>
          </div>
        </div>
      </header>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={{
          content: {
            width: "auto",
            height: "auto",
            margin: "0 auto",
            overflow: "hidden", // Remove the scroll
          },
        }}
      >
        <div className="modal-inner">{/* Modal content */}</div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="user-label" htmlFor="Foydalanuvchi nomi:">
            Foydalanuvchi nomi:
          </label>
          <input
            className="user-name"
            type="text"
            placeholder="Foydalanuvchi nomi"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <label
            className="email-label"
            htmlFor="Majburiy. 150 yoki undan kam belgi. Faqat harflar, raqamlar va @/./+/-/_."
          >
            Majburiy. 150 yoki undan kam belgi. Faqat harflar, raqamlar va
            @/./+/-/_.
          </label>
          <label className="user-label" htmlFor="Parol:">
            Parol:
          </label>
          <input
            className="user-name"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="user-label" htmlFor="Tasdiqlang parol:">
            Tasdiqlang parol:
          </label>
          <input
            className="user-name"
            type="password"
            placeholder="parolni tasdiqlang"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="modal-btn" type="submit">
            Saqlash
          </button>
        </form>
      </Modal>

      <div className="table-box">
        <table className="table">
          <thead>
            <tr>
              <th>Foydalanuvchi nomi</th>
              <th>Parol</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((item, index) => (
              <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
