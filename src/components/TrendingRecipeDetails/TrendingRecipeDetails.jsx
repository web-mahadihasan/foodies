import { useLoaderData } from "react-router-dom";

const TrendingRecipeDetails = () => {
  const detailsId = useLoaderData()
  const { meals } = detailsId;
  
  console.log(meals[0]);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1>I am from trending Items</h1>
    </div>
  );
};

export default TrendingRecipeDetails;