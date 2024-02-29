import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";

import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import HelmetComponent from "../../components/helmet/HelmetComponent";


const Home = () => {
  return (
    <div className="homePage">
      <HelmetComponent title="Home page" description="welcome to home page"  />
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
