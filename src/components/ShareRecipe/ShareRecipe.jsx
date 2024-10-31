import shareImg from "../../../public/assets/share1.jpg"
import ButtonFill from "../Buttons/ButtonFill";

const ShareRecipe = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center my-24">
      <div className="flex-1">
        <img src={shareImg} alt="" className="w-full lg:w-[80%] rounded-md"/>
      </div>
      <div className="flex-1 text-center space-y-3 py-4">
        <h3 className="text-4xl font-bold text-black">
          Share Your <span className="text-primary-color">Recipes</span>
        </h3>
        <p className="text-lg text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit eveniet possimus perferendis qui ratione sapiente ex recusandae! Commodi, corporis.</p>
        <ButtonFill name={'Create Recipes'}/>
      </div>
    </div>
  );
}

export default ShareRecipe
