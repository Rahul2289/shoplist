import React from "react";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { shopActions } from "./../../store/shop-slice";
import DataList from "./../../Data";
const List = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopActions.addProducts(DataList));
  }, [dispatch]);

  const filteredData = useSelector((state) => state.shop.filterItems);
  const allData = useSelector((state) => state.shop.items);
  const status = useSelector((state) => state.shop.status);
  return (
    <div className="list">
      {filteredData &&
        filteredData.map((item) => (
          <ListItem
            status={status}
            key={item.id}
            id={item.id}
            name={item.name}
            area={item.area}
            category={item.category}
            opening={item.opening}
            closeing={item.closeing}
          />
        ))}

      {
        filteredData.length === 0 && <h4> No Items </h4>
        // allData.map((item) => (
        //   <ListItem
        //     key={item.id}
        //     id={item.id}
        //     name={item.name}
        //     area={item.area}
        //     category={item.category}
        //     opening={item.opening}
        //     closeing={item.closeing}
        //   />
        // ))
      }
    </div>
  );
};

export default List;
