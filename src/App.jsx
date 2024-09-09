import "./App.css";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ProductItem from "./components/Cards/ProductItem";
import BannerSecond from "./components/Banner/BannerSecond";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart></Cart>
      <ResponsiveAppBar />
      <Banner />
      <ProductItem />
      <BannerSecond />
      <ProductItem />
      <Footer />
    </>
  );
}

export default App;
