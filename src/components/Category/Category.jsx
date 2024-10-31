import PropTypes from 'prop-types'

const Category = ({ category, handleCategoryBtn, active }) => {
  const { idCategory, strCategory, strCategoryThumb } = category;
  return (
      <div className={` text-center border shadow-md cursor-pointer py-3 rounded-lg hover:-translate-y-2 duration-300 
        ${active === idCategory? ' bg-gradient-to-b from-[#fbc929] to-[#ffad06]': 'bg-white'}`} 
      onClick={() => handleCategoryBtn(`${strCategory}`, `${idCategory}`)}>
      <img src={strCategoryThumb}
        alt="" className="w-44 h-44 mx-auto mb-6 rounded-full bg-gray-200"/>
      <p className="text-xl font-bold text-black/80">{strCategory}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
  handleCategoryBtn: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Category
