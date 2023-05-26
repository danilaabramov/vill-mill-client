import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAllProducts = createAsyncThunk("products", async () => {
    const {data} = await axios.get("/products");
    return data;
});

const initialState = {
    products: {
        items: null, status: "loading",
    }
};

const productsSlice = createSlice({
    name: "products", initialState, reducers: {
    }, extraReducers: {
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.products.items = action.payload.reverse();
            state.products.status = "loaded";
        }, [fetchAllProducts.rejected]: (state) => {
            state.products.status = "error";
        }
    },
});

export const productReducer = productsSlice.reducer;
export const isProductsLoaded = ({products}) => products.products.status === "loaded"