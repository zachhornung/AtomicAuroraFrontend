import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

export const Nav = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between bg-darkBlue p-4 h-16">
      <div className="text-white text-2xl font-semibold">logo goes here</div>
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="navLink">Home</Link>
          </li>
          <li>
            <Link to="/merch" className="navLink">Merch</Link>
          </li>
          <li>
            <Link to="/listen" className="navLink">Listen</Link>
          </li>
          <li>
            <Link to="/about" className="navLink">About</Link>
          </li>
        </ul>
      </nav>
      <DarkModeToggle />
    </div>
  );
};
