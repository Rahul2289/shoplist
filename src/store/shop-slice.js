import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filterItems: [],
  status: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.items = action.payload;
    },
    filterByArea(state, action) {
      const Area = action.payload;
      state.filterItems = state.items.filter((item) => item.area === Area);
    },
    filterByCategory(state, action) {
      const Catogery = action.payload;
      state.filterItems = state.items.filter(
        (item) => item.category === Catogery
      );
    },
    filterByDate(state, action) {
      const Date = action.payload;
      if (Date === true) {
        state.status = "Open";
      } else {
        state.status = "Closed";
      }
    },
    removeItem(state, action) {
      const Id = action.payload;
      state.items = state.items.filter((item) => item.id !== Id);
      state.filterItems = state.filterItems.filter((item) => item.id !== Id);
    },
    addNewItem(state, action) {
      const { enteredName, enderedArea, enderedCategory } = action.payload;
      state.items.push({
        id: new Date().getTime().toString(),
        name: enteredName,
        area: enderedArea,
        category: enderedCategory,
      });
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
