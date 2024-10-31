import banner from "../../../public/assets/banner.png";
import { FiSearch } from "react-icons/fi";
import ButtonFill from "../Buttons/ButtonFill";

const Banner = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto px-4 min-h-[640px] bg-gradient-to-b from-[#fbc929] to-[#f8a602] rounded-md mt-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 xl:px-6">
        <div className="flex-1 order-2 md:order-1 space-y-4">
          <h1 className="text-5xl font-extrabold">
            Your Daily <span className="text-primary-color inline-block mb-3">Dish</span> <br /> A{" "}
            <span className="text-primary-color">Food</span> Journey
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ducimus culpa corrupti ipsam saepe esse dignissimos quidem
            repellendus accusamus magnam.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center bg-[#f5f5f5] rounded-lg lg:w-[70%] w-[65%]">
              <FiSearch className="px-4 w-fit text-xl" />
              <input
                type="text"
                className="px-4 py-2 outline-none bg-transparent border-none text-base font-medium"
                placeholder="Enter you favorite dish"
              />
            </div>
            <ButtonFill name={"Find Recipe"} />
          </div>
          <p className="text-black/70">
            Did you have account?{" "}
            <span className="text-primary-color cursor-pointer">Log in</span>
          </p>
        </div>
        <div className="md:flex-shrink-0 lg:flex-1 flex justify-end order-1 md:order-2">
          <img
            src={banner}
            alt=""
            className="w-[400px] md:w-[250px] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;