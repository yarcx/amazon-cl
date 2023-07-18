import { resetCart } from "@/store/nextSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center gap-2 py-20'>
      <h1 className='text-2xl font-semibold'>Thank you for shopping in amazon-clone</h1>
      <Link href='/' onClick={() => dispatch(resetCart())}>
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default SuccessPage;
