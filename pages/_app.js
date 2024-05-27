import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import AppContext from "@/context/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContext >
          <Header />
          <Component {...pageProps} />
          <Footer />
    </AppContext>
  );

}
