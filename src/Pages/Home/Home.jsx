import HomeBanner from "../../Components/Home/HomeBanner/HomeBanner";
import Footer from "../../Components/Shared/Footer/Footer";
import BottomSection from "../../Components/Home/BottomSection/BottomSection";
import FlashSale from "../../Components/Home/FlashSale/FlashSale";
import Trending from "../../Components/Trending/Trending";
import BottomBanner from "../../Components/Home/BottomBanner/BottomBanner";
import TopHundred from "../../Components/Home/TopHundred/TopHundred";
import { useDispatch } from "react-redux";
import { getAsyncAllProduct } from "../../Redux/features/Products/ProductsSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncAllProduct());
  }, [dispatch]);

  // const products = useSelector((state) => state.Products.products)
  // console.log(products)
  return (
    <>
      <HomeBanner />
      <FlashSale />
      <Trending />
      <TopHundred />
      <BottomBanner />
      <BottomSection />
      <Footer />
    </>
  );
};

export default Home;
