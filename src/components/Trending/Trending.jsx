import TrendingItems from "../TrendingItems/TrendingItems";
import { useLoaderData } from "react-router-dom";

const Trending = () => {
  const trendingData = useLoaderData()
  const {meals} = trendingData

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meals.slice(0, 8).map((trending) => (
          <TrendingItems
            key={trending.idMeal}
            trending={trending}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;