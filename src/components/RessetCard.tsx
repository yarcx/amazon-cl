import { resetCart } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCard = () => {
  const dispatch = useDispatch();
  const emptyCart = () => {
    const confirmDelete = confirm("Do you want to reset your cart");
    if (confirmDelete) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={emptyCart}
      className='h-10 font-semibold duration-200 bg-gray-200 rounded-lg w-44 hover:bg-red-600 hover:text-white'
    >
      reset cart
    </button>
  );
};

export default ResetCard;
