import { resetCart, resetFavoriteCart } from "@/store/nextSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCard = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const isFavoritePage = pathname === "/favorite";

  const emptyCart = () => {
    const confirmDelete = confirm("Do you want to reset your cart");
    if (confirmDelete) {
      dispatch(resetCart());
    }
  };
  const emptyFavoriteCart = () => {
    const confirmDelete = confirm("Do you want to reset your Favorite Product list");
    if (confirmDelete) {
      dispatch(resetFavoriteCart());
    }
  };

  return (
    <button
      onClick={isFavoritePage ? emptyFavoriteCart : emptyCart}
      className='h-10 font-semibold duration-200 bg-gray-200 rounded-lg w-44 hover:bg-red-600 hover:text-white'
    >
      {isFavoritePage ? "reset Favorite list" : "reset cart"}
    </button>
  );
};

export default ResetCard;
