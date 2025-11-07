import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Fragment>
        <SalimovHead />
        <Switcher />
        <Preloader />
        <Component {...pageProps} />
      </Fragment>
    </SessionProvider>
  );
};
export default App;
