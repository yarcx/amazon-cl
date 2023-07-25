import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../types";

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },

    deleteProduct(state, action) {
      state.productData = state.productData.filter((product) => product._id !== action.payload._id);
    },

    deleteFavoriteData(state, action) {
      state.favoriteData = state.favoriteData.filter(
        (product) => product._id !== action.payload._id
      );
    },

    resetCart(state) {
      state.productData = [];
    },
    resetFavoriteCart(state) {
      state.favoriteData = [];
    },

    addUser(state, action) {
      state.userInfo = action.payload;
    },

    removeUser(state, action) {
      state.userInfo = null;
    },

    setAllProduct(state, action) {
      console.log(action.payload, "check the payload");
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  addUser,
  decreaseQuantity,
  deleteProduct,
  deleteFavoriteData,
  increaseQuantity,
  removeUser,
  resetCart,
  setAllProduct,
  resetFavoriteCart,
} = nextSlice.actions;
export default nextSlice.reducer;
