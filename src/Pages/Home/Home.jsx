import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./CategoyFood/Category";
import Featured from "./FeaturedSection/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
// import MidSection from "./MidSection/MidSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/* <MidSection></MidSection> */}
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
