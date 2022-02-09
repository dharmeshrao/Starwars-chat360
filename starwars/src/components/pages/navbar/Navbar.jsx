import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <ul className="flex bg-purple-600 h-12 items-center justify-end text-white ">
        <li className="mx-7  cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-7  cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mx-7  cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-7  cursor-pointer">
          <Link to="/char">Characters</Link>
        </li>
      </ul>
    </nav>
  );
};
