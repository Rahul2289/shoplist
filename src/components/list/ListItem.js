import React from "react";
import "./ListItem.css";
import { shopActions } from "./../../store/shop-slice";
import { useDispatch } from "react-redux";

const ListItem = (props) => {
  const { name, area, category, status, id } = props;
  const dispatch = useDispatch();
  const removeItemFromList = () => {
    dispatch(shopActions.removeItem(id));
  };

  return (
    <div className="list-item">
      <div className="list-item-info">
        <h4>
          Shop name: <span>{name}</span>
        </h4>
        <button type="button" onClick={removeItemFromList}>
          Remove
        </button>
      </div>
      <div className="list-item-info">
        <h4>
          City: <span>{area}</span>
        </h4>
        <h4>
          Catogory <span>{category}</span>
        </h4>
      </div>
      {status && (
        <h4>
          Status:{" "}
          <span className={status ? "greenColor" : "redColor"}>{status}</span>
        </h4>
      )}
    </div>
  );
};

export default ListItem;
