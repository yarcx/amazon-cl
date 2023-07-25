import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { ProductProps, StateProps, StoreProduct } from "../../types";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";
import CardProduct from "@/components/CardProduct";
import ResetCard from "@/components/RessetCard";

interface FavoriteProps {}

const Favorite: FunctionComponent<FavoriteProps> = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.next);

  return (
    <div className='flex items-center justify-center px-6 py-4 mx-auto max-w-screen-2xl'>
      {favoriteData.length > 0 ? (
        <div className='mb-20'>
          <div className='col-span-4 p-4 mx-auto bg-white rounded-lg'>
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
              <p className='text-2xl font-semibold text-amazon_blue'>Favorite Cart</p>
              <p className='text-lg font-semibold text-amazon_blue'>Action</p>
            </div>
            <div className='flex flex-col gap-2 pt-2'>
              {favoriteData.map((item: StoreProduct, index: number) => {
                return (
                  <div key={item._id + index}>
                    <CardProduct item={item} />
                  </div>
                );
              })}

              <ResetCard />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center w-full h-64 col-span-5 py-5 bg-white rounded-lg shadow-lg'>
          <h1 className='text-lg font-medium'>Your Favorite cart list is empty</h1>
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

export default Favorite;
