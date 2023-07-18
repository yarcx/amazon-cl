import Image from "next/image";
import { StoreProduct } from "../../types";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/store/nextSlice";

interface CardProductProps {
  item: StoreProduct;
}

const CardProduct = ({ item }: CardProductProps) => {
  const dispatch = useDispatch();

  const increaseQty = (item: StoreProduct) => {
    dispatch(increaseQuantity(item));
  };

  const decreaseQty = (item: StoreProduct) => {
    dispatch(decreaseQuantity(item));
  };

  const removeItem = (item: StoreProduct) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div className='flex items-center gap-4 bg-gray-100 rounded-lg '>
      <Image src={item.image} className='object-cover' alt='Item Image' width={150} height={150} />
      <div className='flex items-center gap-4 px-2'>
        <div className='flex flex-col gap-1'>
          <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
          <p className='text-sm font-semibold text-gray-600'>{item.description}</p>
          <p className='text-sm text-gray-600'>
            Unit price{" "}
            <span className='font-semibold text-amazon_blue'>
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className='flex items-center gap-6 '>
            <div className='flex items-center justify-between px-4 py-1 rounded-full shadow-lg border-[1px] border-gray-300 w-28 shadow-gray-300'>
              <span
                onClick={() => decreaseQty(item)}
                className='flex items-center justify-center w-6 h-6 text-base bg-transparent border rounded-full cursor-pointer hover:bg-gray-300 decoration-purple-300'
              >
                <LuMinus />
              </span>
              <span>{item?.quantity}</span>
              <span
                onClick={() => increaseQty(item)}
                className='flex items-center justify-center w-6 h-6 text-base bg-transparent border rounded-full cursor-pointer hover:bg-gray-300 decoration-purple-300'
              >
                <LuPlus />
              </span>
            </div>
            <div
              onClick={() => removeItem(item)}
              className='flex items-center text-sm font-medium text-gray-400 duration-300 cursor-pointer hover:text-red-600'
            >
              <IoMdClose /> <p className='mt-[2px]'>remove</p>
            </div>
          </div>
        </div>

        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
