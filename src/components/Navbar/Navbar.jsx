import { useState } from "react";
import logo from "../../../public/assets/cooking.png"
import NavLinks from "../NavLinks/NavLinks";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonFill from "../Buttons/ButtonFill";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/recipe", name: "Recipe" },
    { id: 3, path: "/add-recipe", name: "Add Recipe" },
    { id: 4, path: "/about-us", name: "About Us" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <header className="w-full border-b border-red-100 shadow-sm sticky top-0 z-50 bg-white">
      <div
        className={`container mx-auto px-4 py-4 flex items-center justify-between relative gap-4 ${
          isOpen ? "overflow-visible" : "overflow-hidden"
        }`}
      >
        <div className="flex items-center gap-1 md:flex-1 lg:flex-grow-0">
          <img src={logo} alt="" className="w-8" />
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-color">
            <Link to={'/'}>Foodies</Link>
          </h3>
        </div>
        <div
          className={`absolute md:static bg-red-200 top-[100%] p-6 w-[60%] h-screen flex flex-col duration-700 transition-all space-y-4 md:h-full md:flex-row md:w-fit md:p-0 md:space-y-0 md:bg-transparent lg:items-center lg:justify-between lg:w-[80%] xl:w-[66%] ${
            isOpen ? "right-0" : "-right-72"
          }`}
        >
          <ul
            className={`gap-4 w-full md:absolute lg:static lg:h-full lg:flex-row lg:bg-transparent lg:p-0 lg:px-4 lg:w-fit bg-red-200 top-[100%] md:p-6 md:w-[40%] md:h-screen flex flex-col items-center duration-700 transition-all ${
              isOpen ? "right-0" : "-right-72"
            }`}
          >
            {routes.map((route) => (
              <NavLinks key={route.id} route={route} />
            ))}
          </ul>

          <div className="flex justify-center flex-col md:flex-row gap-2">
            {/* <button className="px-4 lg:px-6 py-1 border border-primary-color rounded text-primary-color font-semibold bg-primary-color/10 duration-300 md:mr-2">
              Log in
            </button> */}
            <ButtonOutline name={'Log in'}/>
            {/* <button className="px-4 lg:px-6 py-1 border border-primary-color text-white rounded bg-primary-color font-semibold hover:bg-primary-color/10 hover:text-primary-color duration-300">
              Sign up
            </button> */}
            <ButtonFill name={'Sign up'}/>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Hamburger rounded />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar
