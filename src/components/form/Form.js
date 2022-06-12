import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
import { shopActions } from "./../../store/shop-slice";
// import { openingDate, closeingDate } from "../date/Date";
const Form = () => {
  const dispatch = useDispatch();
  const areaInputRef = useRef();
  const categortInputRef = useRef();
  const openingInputRef = useRef();
  const closeingInputRef = useRef();

  const handleSubmit = (e) => {
    const enderedArea = areaInputRef.current.value;
    const enderedCategory = categortInputRef.current.value;
    const enderedOpeningDate = openingInputRef.current.value;
    const enderedCloseingDate = closeingInputRef.current.value;
    e.preventDefault();
    if (enderedArea) {
      dispatch(shopActions.filterByArea(enderedArea));
    }
    if (enderedCategory) {
      dispatch(shopActions.filterByCategory(enderedCategory));
    }
    if (enderedOpeningDate && enderedCloseingDate) {
      const result = enderedOpeningDate < enderedCloseingDate;
      dispatch(shopActions.filterByDate(result));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label>Area</label>
          <select ref={areaInputRef}>
            <option value="">Select one</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburaban">Mumbai Suburaban</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>
        </div>
        <div>
          <label>Category</label>
          <select ref={categortInputRef}>
            <option value="">Select one</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationary shop">Stationary shop</option>
          </select>
        </div>
        <div>
          <label>Opening Date</label>
          <input
            type="date"
            ref={openingInputRef}
            min="06/01/2022"
            max="01/01/2023"
          />
        </div>
        <div>
          <label>Closeing Date</label>
          <input
            type="date"
            ref={closeingInputRef}
            min="06/02/2022"
            max="01/01/2023"
          />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
