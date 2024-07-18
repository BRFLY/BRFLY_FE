<<<<<<< HEAD
import react from "react";

const Navbar = () => {};
=======
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
>>>>>>> 6d06a6703a8184f3f2541e65197ff75be37f6d98

export default Navbar;
