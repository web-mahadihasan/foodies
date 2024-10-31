import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const TrendingItems = ({ trending}) => {
  const { strMeal, strMealThumb, idMeal } = trending;
  return (
    <Link to={`/${idMeal}`} >
      <div className="border shadow-sm h-full rounded-lg">
        <img
          src={strMealThumb}
          alt={`Trending Recipe ${strMeal}`}
          className="w-full h-[200px] rounded-t-lg"
        />
        <div className="p-4">
          <h4 className="text-xl font-bold text-black/70 mb-2">{strMeal}</h4>
          <p className="font-medium text-base text-black/50">
            Recipe Id: {idMeal}
          </p>
        </div>
      </div>
    </Link>
  );
};

TrendingItems.propTypes = {
  trending: PropTypes.object.isRequired,
  // handleDetails: PropTypes.func.isRequired,
};

export default TrendingItems
