import Image from "next/image";
import Logo from "../../images/logo.png";
import CartIcon from "../../images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../types";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";

const Header = () => {
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector((state: StateProps) => state.next);

  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className='sticky top-0 z-50 w-full h-20 bg-amazon_blue text-lightText'>
      <div className='inline-flex items-center justify-between w-full h-full gap-1 px-4 mx-auto mdl:gap-3'>
        {/* Logo */}
        <Link
          href='/'
          className='flex justify-center items-center px-2 duration-200 border border-transparent cursor-pointer hover:border-white item-center h-[70%]'
        >
          <Image className='mt-1 object-fit w-28' src={Logo} alt='Logo Image' />
        </Link>
        {/* Delivery */}
        <div className='items-center justify-center px-2 duration-200 border border-transparent cursor-pointer hover:border-white item-center h-[70%] hidden gap-1 xl:inline-flex'>
          <SlLocationPin />
          <div>
            <p>Deliver to</p>
            <p className='font-bold text-white Uppercase'>USA</p>
          </div>
        </div>
        {/* SearchBar */}
        <div className='relative items-center justify-between flex-1 hidden h-10 md:inline-flex'>
          <input
            type='text'
            placeholder='Search Amazon-clone'
            className='h-full px-2 rounded-md text-black placeholder:text-sm  w-full border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
          />
          <span className='absolute right-0 flex items-center justify-center w-12 h-full text-2xl text-black bg-amazon_yellow rounded-tr-md rounded-br-md'>
            <HiOutlineSearch />
          </span>
        </div>
        {/* Sign in Option */}
        {userInfo ? (
          <div className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1'>
            <Image
              src={userInfo?.image}
              alt='userImage'
              width={100}
              height={100}
              className='object-cover w-8 h-8 rounded-full'
            />
            <div className='flex flex-col justify-between text-xs text-gray-100'>
              <p className='font-bold text-white'>{userInfo?.name}</p>
              <p>{userInfo?.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className='flex flex-col px-2 text-xs text-gray-100 duration-200 border border-transparent cursor-pointer justify-centre hover:border-white'
          >
            <p>Hello, Signin</p>
            <p className='flex items-center font-bold text-white'>
              Account & List{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}

        {/* Favorite */}
        <div className='relative flex flex-col px-2 text-xs text-gray-100 duration-200 border border-transparent cursor-pointer justify-centre hover:border-white'>
          <p>Marked</p>
          <p className='flex items-center font-bold text-white'>Favorite</p>
          {favoriteData.length > 0 && (
            <span className='absolute right-0 top-0 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>
              {favoriteData.length}
            </span>
          )}
        </div>
        {/* Cart */}
        <Link
          href='/cart'
          className='flex  items-center h-[70%] px-2 text-xs text-gray-100 duration-200 border border-transparent cursor-pointer justify-center relative hover:border-white'
        >
          <Image className='object-cover w-auto h-8' alt='Cart Icon' src={CartIcon} />
          <p className='mt-3 text-xs font-bold text-white '>Cart</p>
          <span className='absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold'>
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
