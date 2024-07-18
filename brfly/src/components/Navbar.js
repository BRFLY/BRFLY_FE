import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/calendar">
        <button>calendar</button>
      </Link>
      <Link to="/news">
        <button>news</button>
      </Link>
    </>
  );
};

export default Navbar;
