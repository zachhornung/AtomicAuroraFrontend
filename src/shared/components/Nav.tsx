import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import AALogo from "../../../public/AALogo.jpg";
import { CartNavComponent } from "../../features/cart/components/CartNavComponent";


export const Nav = () => {
  return (
    <div className="flex sticky top-0 z-40 justify-between items-center p-4 h-20 bg-gradient-to-r from-darkBlue to-primary">
      <div className="overflow-hidden w-44 h-44 text-2xl font-semibold text-white rounded-full">
        <img
          src={AALogo}
          alt="Atomic Aurora"
          className="object-cover w-full h-full"
        />
      </div>
      <nav className="flex justify-between items-center">
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
      <ul className="flex justify-end space-x-4">
        <CartNavComponent />
        <li>
          <Link to="/login" className="navLink">Login</Link>
        </li>
      </ul>
      <DarkModeToggle />
    </div>
  );
};
