import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Trending from './components/Trending/Trending.jsx';
import TrendingRecipeDetails from './components/TrendingRecipeDetails/TrendingRecipeDetails.jsx';
import Recipe from './components/Recipe/Recipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`),
        element: <Trending />,
      },
      {
        path: "/:idMeal",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          ),
        element: <TrendingRecipeDetails />,
      },
    ],
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
