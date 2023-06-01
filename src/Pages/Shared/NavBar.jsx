import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../Providers/Authprovider";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <div className="flex flex-col">
            <div className="badge badge-primary rounded-full ">
              +{cart?.length || 0}
            </div>
            <FaShoppingCart></FaShoppingCart>
          </div>
        </Link>
      </li>

      {user ? (
        <li>
          <Link onClick={handleLogOut}>LogOut</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10  bg-opacity-30 bg-slate-900 max-w-[1400px] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl">
            <Link to="/">BBistro Boss</Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <p className="btn">Get started</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
