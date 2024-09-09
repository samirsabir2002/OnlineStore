import { configureStore, createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "MainSlice",
  initialState: {
    cart: []
  },
  reducers: {
    AddToCartAction: (state, action) => {
      console.log(
        "🚀 ~ file: Index.js:11 ~ state: Product has been added in cart",
        action.payload
      );

      //   state.cart.push(action.payload);
    }
  }
});
const MainStore = configureStore({
  reducer: MainSlice.reducer
});
export const Actions = MainSlice.actions;
export default MainStore;
