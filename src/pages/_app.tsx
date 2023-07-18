import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <main className='bg-gray-300 font-bodyfont'>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </main>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
