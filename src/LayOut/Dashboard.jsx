import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaCalendarAlt,
  FaListUl,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import { IoIosMenu, IoIosWallet } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiShopee } from "react-icons/si";
import { ImSpoonKnife } from "react-icons/im";

import useCart from "../Hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server
  const isAdmin = true;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  bg-[#D1A054] text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <ImSpoonKnife></ImSpoonKnife>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaListUl></FaListUl>
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <RiBook2Fill></RiBook2Fill>
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <HiUserGroup></HiUserGroup>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My cart
                  <span className="badge badge-primary rounded-full ">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <IoIosWallet></IoIosWallet>
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <IoIosMenu></IoIosMenu>
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <SiShopee></SiShopee>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdEmail></MdEmail>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
