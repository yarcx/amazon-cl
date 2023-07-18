import { LuMenu } from "react-icons/lu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../types";
import { removeUser } from "@/store/nextSlice";

const BottomHeader = () => {
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser({}));
  };

  return (
    <div className='flex items-center w-full h-10 px-4 text-sm text-white bg-amazon_light '>
      <p className='flex items-center h-8 gap-1 px-2 duration-200 border border-transparent cursor-pointer hover:border-white'>
        <LuMenu className='text-xl' /> All
      </p>

      <p className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer md:inline-flex hover:border-white'>
        Todays Deals
      </p>
      <p className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer md:inline-flex hover:border-white'>
        Customer Service
      </p>
      <p className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer md:inline-flex hover:border-white'>
        Registry
      </p>
      <p className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer md:inline-flex hover:border-white'>
        Gift Cards
      </p>
      <p className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer md:inline-flex hover:border-white'>
        Sell
      </p>
      {userInfo && (
        <button
          onClick={() => handleSignOut()}
          className='items-center hidden h-8 px-2 duration-200 border border-transparent cursor-pointer text-amazon_yellow hover:text-red-400 md:inline-flex hover:border-red-600'
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
