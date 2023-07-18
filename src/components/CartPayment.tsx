import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useSelector, useDispatch } from "react-redux";
import { StateProps, StoreProduct } from "../../types";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CartPayment = () => {
  const { productData, userInfo } = useSelector((state: StateProps) => state.next);
  const { data: session } = useSession();

  const dispatch = useDispatch();

  const totalAmount = productData.reduce((acc: number, item: StoreProduct) => {
    acc = acc + item.price * item.quantity;
    return acc;
  }, 0);

  // useEffect(() => {
  //   let amt = 0;
  //   productData.map((product) => {
  //     amt = amt + product.price * product.quantity;
  //   });
  //   setTotalAmount(amt);
  // }, [productData]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: userInfo?.email }),
    });

    const checkoutSession = await response.json();

    try {
      // Redirect user to stripe checkout session
      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='flex flex-col gap-4 p-2'>
      <div className='flex gap-2 '>
        <span className='flex items-center justify-center w-6 h-6 p-1 mt-1 text-sm text-white bg-green-600 rounded-full'>
          <SiMediamarkt />
        </span>
        <p>
          Your order qualifies for Free Shipping by choosing this option at checkout. See details...
        </p>
      </div>
      <p className='flex items-center justify-between px-2 font-semibold'>
        Total:{" "}
        <span className='text-xl font-bold'>
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>

      {userInfo ? (
        <div className='flex flex-col items-center'>
          <button
            onClick={handleCheckout}
            className='w-full h-10 text-sm font-semibold text-white duration-100 rounded-lg bg-amazon_blue hover:bg-amazon_yellow hover:text-black'
          >
            Proceed To buy
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <button className='w-full h-10 text-sm font-semibold text-white bg-opacity-50 rounded-lg cursor-not-allowed bg-amazon_blue'>
            Proceed To buy
          </button>
          <p className='mt-1 font-semibold text-red-500 txt-xs animate-bounce'>
            Please Login to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPayment;
