import { Outlet } from 'react-router-dom';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import TrendingContainer from './components/TrendingContainer/TrendingContainer';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import ShareRecipe from './components/ShareRecipe/ShareRecipe';
import DiscussRecipe from './components/DiscussRecipe/DiscussRecipe';
// import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
// import TrendingRecipeDetails from './components/TrendingRecipeDetails/TrendingRecipeDetails';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <TrendingContainer title={"To Trending Recipe"} />
      <Outlet></Outlet>
      <TrendingContainer title={"Category"} />
      <CategoryContainer/>
      <ShareRecipe/>
      <DiscussRecipe/>
    </>
  );
}

export default App
