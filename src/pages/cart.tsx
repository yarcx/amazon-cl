import React from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../types";
import CardProduct from "@/components/CardProduct";
import ResetCard from "@/components/RessetCard";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className='grid grid-cols-5 gap-10 px-6 py-4 mx-auto mb-20 max-w-screen-2xl'>
      {productData.length > 0 ? (
        <>
          <div className='col-span-4 p-4 bg-white rounded-lg'>
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
              <p className='text-2xl font-semibold text-amazon_blue'>Shopping Cart</p>
              <p className='text-lg font-semibold text-amazon_blue'>Subtitles</p>
            </div>
            <div className='flex flex-col gap-2 pt-2'>
              {productData.map((item: StoreProduct, index: number) => {
                return (
                  <div key={item._id + index}>
                    <CardProduct item={item} />
                  </div>
                );
              })}

              <ResetCard />
            </div>
          </div>
          <div className='flex items-center justify-center h-64 col-span-1 bg-white rounded-lg'>
            <CartPayment />
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center h-64 col-span-5 py-5 bg-white rounded-lg shadow-lg'>
          <h1 className='text-lg font-medium'>Your cart is empty</h1>
          <Link href='/'>
            {" "}
            <button className='h-10 text-sm font-semibold text-white rounded-lg w-52 bg-amazon_blue hover:text-black hover:bg-amazon_yellow'>
              Go to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
