import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartStore.js";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
