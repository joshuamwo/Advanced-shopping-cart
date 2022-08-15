import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export function Navbar() {
  return (
    <div className="bg-white shadow-md p-1 flex sticky">
      <div className="mx-auto ml-0 space-x-4 p-4 font-semibold text-gray-500 hover:focus:text-gray-900 ">
        <NavLink className={"hover:text-gray-900"} to="/">
          Home
        </NavLink>
        <NavLink className={"hover:text-gray-900"} to="/store">
          Store
        </NavLink>
        <NavLink className={"hover:text-gray-900"} to="/about">
          About
        </NavLink>
      </div>
      <button className="relative flex justify-center items-center w-12 h-12 right-2 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full">
        <BsCart className="text-2xl" />
        <div className="bg-red-400 rounded-full w-4 h-4 text-white text-xs absolute bottom-0 right-0 ">
          3
        </div>
      </button>
    </div>
  );
}
