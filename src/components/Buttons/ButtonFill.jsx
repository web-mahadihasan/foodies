import PropTypes from "prop-types";

const ButtonFill = ({ name }) => {
  return (
    <>
      <button className="px-4 lg:px-6 py-1 border border-primary-color text-white rounded bg-primary-color font-semibold hover:bg-primary-color/10 hover:text-primary-color duration-300">
        {name}
      </button>
    </>
  );
};
ButtonFill.propTypes = {
  name: PropTypes.string.isRequired
};
export default ButtonFill;
