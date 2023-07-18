import Image from "next/image";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full h-20 gap-4 text-gray-300 bg-amazon_light'>
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
