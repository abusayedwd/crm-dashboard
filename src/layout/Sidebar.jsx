import { useState } from "react"; // Import useState for managing dropdown state
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../public/image/logo.png';
import { FaDollarSign, FaSackDollar, FaUsers } from "react-icons/fa6";
import { BiMenu, BiSolidDashboard } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdExpandMore, MdExpandLess, MdOutlinePriceChange } from "react-icons/md"; // Import icons for dropdown indicator
import { GrUserWorker } from "react-icons/gr";
import { VscGithubProject } from "react-icons/vsc";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isEmployeeDropdownOpen, setEmployeeDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleEmployeeDropdown = () => {
    setEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] w-[120px] flex flex-col justify-between bg-primaryBg h-full min-h-screen rounded-md">
      <div>
        <div className="p-[10px] grid justify-items-stretch sm:p-[16px]">
          <img className="h-16 rounded-lg justify-self-center" src={logo} alt="Logo" />
        </div>
        <div className="ml-5 mt-8">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="customer"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium rounded-lg"
              }
            >
              <FaUsers className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Customers</span>
            </NavLink>

            {/* Employee Dropdown */}
            <div>
              <div
                onClick={toggleEmployeeDropdown}
                className="flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] m-[6px] rounded-lg"
              >
                <GrUserWorker className="h-7 w-7 lg:h-5 lg:w-5" />
                <span className="hidden ml-2 sm:block">Employee</span>
                {/* Arrow Icon */}
                {isEmployeeDropdownOpen ? (
                  <MdExpandLess className="ml-auto h-5 w-5 text-[#FFFFFF]" />
                ) : (
                  <MdExpandMore className="ml-auto h-5 w-5 text-[#FFFFFF]" />
                )}
              </div>
              {isEmployeeDropdownOpen && ( // Render dropdown items if open
                <div className="ml-5">
                  <NavLink
                    to="employeelist"
                    className={({ isActive }) =>
                      isActive
                        ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                        : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium rounded-lg"
                    }
                  >
                    <span className="hidden ml-2 sm:block">Employee List</span>
                  </NavLink>
                  <NavLink
                    to="employeerate"
                    className={({ isActive }) =>
                      isActive
                        ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                        : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium rounded-lg"
                    }
                  >
                    <span className="hidden ml-2 sm:block">Employee hr Rate</span>
                  </NavLink>
                  <NavLink
                    to="employeepayment"
                    className={({ isActive }) =>
                      isActive
                        ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                        : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium rounded-lg"
                    }
                  >
                    <span className="hidden ml-2 sm:block">Employee Payment</span>
                  </NavLink>
                  <NavLink
                    to="employee-payment-weeklyrate"
                    className={({ isActive }) =>
                      isActive
                        ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                        : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium rounded-lg"
                    }
                  >
                    <span className="hidden ml-2 sm:block">Weekly Rate</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="project"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <VscGithubProject className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Project</span>
            </NavLink>

            <NavLink
              to="cost"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium rounded-lg"
              }
            >
              <MdOutlinePriceChange className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Cost</span>
            </NavLink>

            <NavLink
              to="invoice"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium rounded-lg"
              }
            >
             <RiVoiceprintFill className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Invoice lenbec</span>
            </NavLink>

            <NavLink
              to="paymentrevolut"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium rounded-lg"
              }
            >
             <AiFillDollarCircle className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Payment in revolut</span>
            </NavLink>

            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium rounded-lg"
              }
            >
              <CiSettings className="h-8 w-8 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Settings</span>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* Uncomment for Log Out functionality
      <div className="mb-[60px] mt-2">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#942020] font-medium"
        >
          <HiLogout className="h-8 w-8 lg:h-5 lg:w-5" />
          <span className="hidden sm:block text-[20px]">Log Out</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
