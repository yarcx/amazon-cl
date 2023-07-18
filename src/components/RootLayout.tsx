import { ReactElement } from "react";
import Footer from "./Footer";
import BottomHeader from "./Header/BottomHeader";
import Header from "./Header/Header";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
