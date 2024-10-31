import { useEffect, useState } from "react"
import Category from "../Category/Category";
import TrendingContainer from "../TrendingContainer/TrendingContainer";
import TrendingItems from "../TrendingItems/TrendingItems";

const CategoryContainer = () => {
  const [categoryBtn, setCategoryBtn] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [categoryRecipe, setCategoryRecipe] = useState([])
  const [active, setActive] = useState('')

  const handleCategoryBtn = (names, cardId) => {
    setCategoryName(names);
    setActive(cardId);
  }

  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => setCategoryBtn(data.categories));
  },[])

  useEffect(() => {
    const loadRecipe = async() => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName? categoryName : 'Seafood'}`)
      const data = await res.json()
      setCategoryRecipe(data.meals);
    };
    loadRecipe();
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-8">
        {categoryBtn.slice(0, 6).map((category) => (
          <Category
            key={category.idCategory}
            category={category}
            handleCategoryBtn={handleCategoryBtn}
            active={active}
          />
        ))}
      </div>
      <div>
        <TrendingContainer title={`Explorer all Recipe`} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categoryRecipe.slice(0, 12).map((categoryRecipeItems) => (
          <TrendingItems
            key={categoryRecipeItems.idMeal}
            trending={categoryRecipeItems}
          />
        ))}
      </div>
    </div>
  );
}

CategoryContainer.propTypes = {

}

export default CategoryContainer
