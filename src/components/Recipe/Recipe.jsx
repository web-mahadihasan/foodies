import { Outlet } from "react-router-dom";
import TrendingContainer from "../TrendingContainer/TrendingContainer";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import Navbar from "../Navbar/Navbar";

const Recipe = () => {
  return (
    <div>
      <Navbar/>
      <TrendingContainer title={"To Trending Recipe"} />
      <Outlet></Outlet>
      <TrendingContainer title={"Category"} />
      <CategoryContainer/>
    </div>
  );
};

export default Recipe;
