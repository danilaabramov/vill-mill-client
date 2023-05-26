import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth";
import {productReducer} from "./slices/products";

const store = configureStore({
    reducer: {
        products: productReducer, auth: authReducer
    },
});

export default store;
