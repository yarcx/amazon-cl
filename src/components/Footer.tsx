import Image from "next/image";
import Logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { StateProps } from "../../types";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();
  const isNotHomePage = pathname !== "/";
  const { favoriteData, productData } = useSelector((state: StateProps) => state.next);

  const checkThePageAndProductLength =
    (isNotHomePage && !favoriteData.length) || !productData.length;

  return (
    <footer
      className={`flex items-center justify-center w-full h-20 gap-4 text-gray-300 bg-amazon_light ${
        checkThePageAndProductLength && "fixed bottom-0"
      }`}
    >
      <Image src={Logo} alt='Logo' className='w-24' />
      <p className='-mt-4 text-sm'>
        All rights reserved{" "}
        <a
          className='hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300'
          href='#'
          target='_black'
        >
          @amazonclone.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
