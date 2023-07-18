import Image from "next/image";
import { ProductProps } from "../../types";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

interface Props {
  productData: ProductProps[];
}

const Product = ({ productData }: Props) => {
  const dispatch = useDispatch();

  const add = (product: ProductProps) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const addToFav = (product: ProductProps) => {
    dispatch(addToFavorite({ ...product, quantity: 1 }));
  };

  return (
    <div className='grid grid-cols-1 gap-6 px-6 w-ful md:grid-cols-2 xl:grid-cols-4'>
      {productData.map((product: ProductProps) => {
        const { brand, category, description, image, isName, oldPrice, price, title, isNew, _id } =
          product;
        return (
          <div
            key={_id}
            className='relative w-full p-4 overflow-hidden text-black bg-white border rounded-lg border-grey-300 group'
          >
            <div className='w-full h-[260px] relative'>
              <Image
                className='object-cover w-full h-full transition-transform duration-200 scale-50 hover:scale-100'
                src={image}
                alt='Product Image'
                width={300}
                height={300}
              />
              <div className=' absolute right-0 overflow-hidden w-12 h-24 bottom-10 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform'>
                <span
                  onClick={() => {
                    add(product);
                  }}
                  className='h-full w-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-200'
                >
                  <HiShoppingCart />
                </span>
                <span
                  onClick={() => {
                    addToFav(product);
                  }}
                  className='flex items-center justify-center w-full h-full text-xl duration-200 bg-transparent cursor-pointer hover:bg-amazon_yellow'
                >
                  <FaHeart />
                </span>
              </div>
            </div>

            {isNew && (
              <p className='absolute text-xs font-medium tracking-wide top-5 right-5 text-amazon_blue animate-bounce'>
                !save <FormattedPrice amount={oldPrice - price} />
              </p>
            )}
            <hr />

            <div className='flex flex-col gap-1 px-3 py-3'>
              <p className='text-xs tracking-wide text-gray-500'>{category}</p>
              <p className='text-base font-medium'>{title}</p>
              <p className='flex items-center gap-2'>
                <span className='text-xs line-through'>
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className='font-semibold text-amazon-blue'>
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className='text-xs text-justify text-gray-600'>{description.substring(0, 120)}</p>

              <button
                onClick={() => {
                  add(product);
                }}
                className='h-10 mt-2 font-medium text-white duration-300 rounded-md bg-amazon_blue hover:bg-amazon_yellow hover:text-black'
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
