import Banner from "@/components/Banner";
import Product from "@/components/Product";
import { Inter } from "next/font/google";
import { ProductProps } from "../../types";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
  return (
    <main>
      <div className='max-w-screen-2xl mx-aut'>
        <Banner />
        <div className='relative z-20 mb-10 md:-mt-20 lgl:-mt-32 xl:-mt-60'>
          <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

// Server Side rendering of fetching data

export const getServerSideProps = async () => {
  let productData = null;
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");

    productData = await res?.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      productData,
    },
  };
};
