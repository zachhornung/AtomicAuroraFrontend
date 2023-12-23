import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import AALogo from "../../../public/AALogo.jpg";

export const Nav = () => {
  return (
    <div className="sticky z-40 top-0 flex items-center justify-between p-4 h-20 bg-gradient-to-r from-darkBlue to-primary">
      <div className="text-white text-2xl font-semibold w-44 h-44 rounded-full overflow-hidden">
        <img
          src={AALogo}
          alt="Atomic Aurora"
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="navLink">Home</Link>
          </li>
          <li>
            <Link to="/products" className="navLink">Merch</Link>
          </li>
          <li>
            <Link to="/shows" className="navLink">Shows</Link>
          </li>
          <li>
            <Link to="/listen" className="navLink">Listen</Link>
          </li>
          <li>
            <Link to="/about" className="navLink">About</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex justify-end">
        <li>
          <Link to="/login" className="navLink">Login</Link>
        </li>
      </ul>
      <DarkModeToggle />
    </div>
  );
};
