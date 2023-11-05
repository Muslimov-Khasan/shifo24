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
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      navigate("/");
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
    handleCloseModal();
  };

  const handleAddUser = (user) => {
    setTableData([...tableData, user]);
  };

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
                <button className="header-btn" onClick={handleOpenModal}>
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
          <input className="user-name" type="password" placeholder="Parol" />
          <label
            className="if-label"
            htmlFor="Majburiy. 150 yoki undan kam belgi. Faqat harflar, raqamlar va @/./+/-/_."
          >
            Sizning parolingiz boshqa shaxsiy ma'lumotlaringizga juda o'xshash
            bo'lishi mumkin emas. Parolingiz kamida 8 ta belgidan iborat
            boʻlishi kerak. Sizning parolingiz tez-tez ishlatiladigan parol
            bo'lishi mumkin emas. Parolingiz butunlay raqamli bo'lishi mumkin
            emas.
          </label>
          <label className="user-label" htmlFor="Foydalanuvchi nomi:">
            Parolni tasdiqlash:
          </label>
          <input
            className="user-name"
            type="password"
            placeholder="Parolni tasdiqlash:"
          />
          <div className="modal-buttons">
            <button className="modal-btn" onClick={handleAddUser} type="submit">
              Save
            </button>
            <button className="modal-button" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <div className="contianer">
        <table className="head-list">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th className="head-table">Foydalanuvchi nomi</th>
              <th className="head-table">Elektron pochta manzili</th>
              <th className="head-table">Ism</th>
              <th className="head-table">Familiya</th>
              <th className="head-table">Xodimlarning holati</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index) => (
              <tr className="data-list" key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="data-item">{user.name}</td>
                <td className="data-item">{user.email}</td>
                <td className="data-item">{user.firstName}</td>
                <td className="data-item">{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;