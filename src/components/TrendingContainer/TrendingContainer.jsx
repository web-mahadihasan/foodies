import ButtonOutline from "../Buttons/ButtonOutline";
import PropTypes from "prop-types";

const TrendingContainer = ({title}) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center my-20">
        <h3 className="text-black/80 text-2xl md:text-3xl font-bold">
          {title}
        </h3>
        <ButtonOutline name={"View all"} />
      </div>
    </div>
  );
};
TrendingContainer.propTypes = {
  title: PropTypes.string.isRequired
};
export default TrendingContainer;
