import PropTypes from "prop-types";

const ButtonOutline = ({ name }) => {
  return (
    <>
      <button className="px-4 lg:px-6 py-1 border border-primary-color rounded text-primary-color font-semibold bg-primary-color/10 duration-300 md:mr-2">
        {name}
      </button>
    </>
  );
};

ButtonOutline.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ButtonOutline;
