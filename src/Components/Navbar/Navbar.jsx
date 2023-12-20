import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-[#FFF4F4]">
        <div className="flex">
          <h1 className="btn btn-ghost text-[40px] text-[#E86A33] ml-[120px] md:ml-[0px] lg:ml-[0px] font-bold">
          OrganizePilot
          </h1>
        </div>
        {/* navbar link page route */}
        <div className="lg:w-1/3 lg:ml-[300px] ml-[70px]">
          <ul className="flex gap-5 font-bold  flex-row md:flex-row md:justify-center md:items-center text-[#263A29] text-lg ml-[15px] md:ml-[0px] lg:ml-[0px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#17594A] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                DASHBOARD
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
