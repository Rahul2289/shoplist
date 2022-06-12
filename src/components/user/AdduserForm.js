import React, { useRef } from "react";
import "./AddUserForm.css";
import { shopActions } from "./../../store/shop-slice";
import { useDispatch } from "react-redux";

const AdduserForm = () => {
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const areaInputRef = useRef();
  const categortInputRef = useRef();

  const addUserSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enderedArea = areaInputRef.current.value;
    const enderedCategory = categortInputRef.current.value;
    if (enteredName && enderedArea && enderedCategory) {
      dispatch(
        shopActions.addNewItem({ enteredName, enderedArea, enderedCategory })
      );
    }
    nameInputRef.current.value = "";
    areaInputRef.current.value = "";
    categortInputRef.current.value = "";
  };

  return (
    <form onSubmit={addUserSubmitHandler} className="form">
      <div>
        <label>shop Name</label>
        <input type="text" ref={nameInputRef} required />
      </div>
      <div className="form-container">
        <div>
          <label>Area</label>
          <select ref={areaInputRef} required>
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
          <select ref={categortInputRef} required>
            <option value="">Select one</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationary shop">Stationary shop</option>
          </select>
        </div>
      </div>
      <button>Add</button>
    </form>
  );
};

export default AdduserForm;
