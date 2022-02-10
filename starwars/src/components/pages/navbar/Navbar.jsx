import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <ul className="flex bg-purple-600 h-14 items-center justify-end text-white ">
        <li className="mx-7  cursor-pointer">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
