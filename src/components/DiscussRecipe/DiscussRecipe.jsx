import discuss from "../../../public/assets/Image.png";
import ButtonFill from "../Buttons/ButtonFill";

const DiscussRecipe = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 min-h-[320px] bg-center bg-cover bg-no-repeat my-24 rounded-lg flex justify-center items-center" style={{backgroundImage: `url(${discuss})`}}>
      <div className="text-center space-y-3">
        <h3 className="text-5xl text-black/85 font-extrabold">Deliciousness <br /> to your inbox</h3>
        <p className="font-medium text-black/80">Enjoy weekly handpick <span className="text-primary-color">Recipe</span> and <br />recommendation</p>
        <form className="">
          <input type="text" className="px-4 py-[6px] rounded outline-none mr-2" placeholder="Your email" />
          <ButtonFill name={'JOIN'}/>
        </form>
      </div>
    </div>
  );
};

export default DiscussRecipe;