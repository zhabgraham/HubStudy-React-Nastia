import Nav from "../main/Nav.js";
import Footer from "../main/Footer.js";
import "../../Styles/mentorSphere/mentor-page.css";
import "../../Styles/main/general.css";
import FilterMentors from "./FilterMentors.js";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const initialValues = {
  minPrice: "",
  maxPrice: "",
  minQualify: "",
  maxQualify: "",
  groupLessons: "",
  qualification: "",
}

const Mentor = () => {

  const [formData, updateFormData] = useState(initialValues);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  return (
    <div className="bodyMentorSphere">
      <Nav></Nav>
      <div className="container_mentorPage">
        <div className="sidebar">
          <h2 className="filter-title">Фільтри</h2>
          <div className="wrapper-sidebar">
            <div class="header-price">
              <p className="price-title">Ціна заняття</p>
              <div className="price-input">
                <div className="field">
                  <span className="span-field">Мін</span>
                  <input type="text" onChange={handleChange} name="minPrice" id="minPrice" className="input-min"></input>
                </div>
                <div className="field">
                  <span className="span-field">Макс</span>
                  <input type="text" onChange={handleChange} name="maxPrice" id="maxPrice" className="input-max"></input>
                </div>
              </div>
            </div>
            <div class="header-experience">
              <p className="experience-title">Досвід викладання</p>
              <div className="price-input">
                <div className="field">
                  <span className="span-field">Від</span>
                  <input type="text" onChange={handleChange} name="minQualify" id="minQualify" className="input-min"></input>
                </div>
                <div className="field">
                  <span className="span-field">До</span>
                  <input type="text" onChange={handleChange} name="maxQualify" id="maxQualify" className="input-max"></input>
                </div>
              </div>
            </div>
            <div className="header-group">
              <p className="group-title">Формат занять</p>
              <div className="group-input">
                <div className="group-item">
                  <input className="group-input" type="checkbox" onChange={handleChange} id="groupLessons" name="groupLessons" value="true" />
                  <label className="group-label" for="">Групові</label>
                </div>
                <div className="group-item">
                  <input className="group-input" type="checkbox" id="" name="" value="" />
                  <label className="group-label" for="">Індивідуальні</label>
                </div>
              </div>
            </div>
            <div className="header-sphere">
              <p className="sphere-title">Сфера викладання</p>
              <div className="sphere-input">
                <label for='selection-form'></label>
                <Form.Select id='qualification' name='qualification' onChange={handleChange} className='selection-form' aria-label="Default select example">
                  <option disabled>Оберіть сферу</option>
                  <option value="1">Уроки вокалу</option>
                  <option selected value="2">Плавання</option>
                  <option value="3">ІТ-сфера</option>
                  <option value="4">ІТ-сфера</option>
                  <option value="5">ІТ-сфера</option>
                  <option value="6">ІТ-сфера</option>
                  <option value="7">ІТ-сфера</option>
                  <option value="8">ІТ-сфера</option>
                  <option value="9">ІТ-сфера</option>
                  <option value="10">ІТ-сфера</option>
                  <option value="11">ІТ-сфера</option>
                </Form.Select>

              </div>
            </div>
            <div>
              <button className="submit-group" type="submit">Підтвердити</button>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="container__Mentor">
            <h1 className="title-mentorPage">Оберіть свого наставника!</h1>
            <p className="paragraph-mentorPage">
              Skoro bude paska. Tak sho zakazuite miasko. Skoro bude paska.
              Shynka i kovbaska. Tse kapets. Tse kapets. Tse kapets. Tse kapets.
              Tse kapets. Tse kapets. Tse kapets. Tse kapets.{" "}
            </p>
            <div className="buttons-mentorPage">
              <button className="rating-button button-mentorPage">
                Рейтинг наставників
              </button>
              <button className="sphere-button button-mentorPage">
                Сфери навчання
              </button>
            </div>
            <div className="mentor-list">
<<<<<<< HEAD
              <FilterMentors formData={formData}/>
=======
            <FilterMentors formData={formData}/>
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mentor">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mentor;
