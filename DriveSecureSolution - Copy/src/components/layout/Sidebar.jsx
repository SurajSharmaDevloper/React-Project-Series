import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useAuth } from "../../auth/AuthProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // dropdowns
  const [openDealer, setOpenDealer] = useState(false);
  const [openIssuer, setOpenIssuer] = useState(false);
  const [openInsurance, setOpenInsurance] = useState(false);
  const [openOther, setOpenOther] = useState(false);
  const [openMaster, setOpenMaster] = useState(false);

  // Handle responsive sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1070) {
        setIsMobile(true);
        setIsOpen(false);
      } else {
        setIsMobile(false);
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false);
  };

  // ⭐ ACTIVE LINK CLASS (GLOBAL)
  const activeLink = ({ isActive }) =>
    `px-3 py-2 rounded-md transition flex items-center gap-2 relative cursor-pointer select-none
     ${isActive
      ? "text-[#e36e53] font-semibold bg-gray-800 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#e36e53] before:rounded-r-md"
      : "text-gray-300 hover:bg-gray-800"
    }`;

  // ⭐ ACTIVE LINK FOR DROPDOWN ITEMS
  const activeDropdown = ({ isActive }) =>
    `block pl-8 pr-3 py-2 text-sm transition relative rounded-md
     ${isActive
      ? "text-[#e36e53] font-semibold bg-gray-800 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#e36e53]"
      : "text-gray-300 hover:bg-gray-800"
    }`;

  const { user } = useAuth();
  const role = user?.role;

  return (
    <>
      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-[97.6px] h-[calc(100dvh-97.6px)] bg-gray-900 text-white flex flex-col transition-transform duration-500 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        <nav className="flex flex-col mt-4 space-y-1 px-4 overflow-y-auto">
          {/* ===================== ADMIN ===================== */}
          {role === "Admin" && (
            <>
              <NavLink
                to="/admin"
                className={activeLink}
                onClick={handleNavClick}
              >
                Admin Dashboard
              </NavLink>

              {/* Dealer Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDealer(!openDealer)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-800 transition text-gray-300"
                >
                  <span>Dealer</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${openDealer && "rotate-90"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openDealer ? "max-h-60" : "max-h-0"
                    }`}
                >

                  <NavLink
                    to="/admin/dealer_list"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Dealer List
                  </NavLink>
                  <NavLink
                    to="/admin/dealer_wise_price_list"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Dealer Wise Price List
                  </NavLink>
                </div>
              </div>

              {/* Issuer Dropdown */}
              <div>
                <button
                  onClick={() => setOpenIssuer(!openIssuer)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-800 transition text-gray-300"
                >
                  <span>Issuer</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${openIssuer && "rotate-90"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIssuer ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <NavLink
                    to="/admin/issuer_detail"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Issuer Details
                  </NavLink>
                  <NavLink
                    to="/admin/issuer_list"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Issuer List
                  </NavLink>


                </div>
              </div>

              <NavLink
                to="/admin/policy_mic"
                className={activeLink}
                onClick={handleNavClick}
              >
                Policy MIC
              </NavLink>
              <NavLink
                to="/admin/payment"
                className={activeLink}
                onClick={handleNavClick}
              >
                Payment
              </NavLink>
              <div>
                <button
                  onClick={() => setOpenMaster(!openMaster)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-gray-800 transition text-gray-300"
                >
                  <span>Master</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${openMaster && "rotate-90"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openMaster ? "max-h-60" : "max-h-0"
                    }`}
                >

                  <NavLink
                    to="/admin/InformationTable"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Vehical List
                  </NavLink>
                  <NavLink
                    to="/admin/invoice_Page"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Invoice page
                  </NavLink>
                </div>
              </div>
            </>
          )}

          {/* ===================== ISSUER ===================== */}
          {role === "Issuer" && (
            <>
              <NavLink
                to="/issuer/policy_download"
                className={activeLink}
                onClick={handleNavClick}
              >
                Policy Download
              </NavLink>
              <NavLink
                to="/issuer/policy_mis"
                className={activeLink}
                onClick={handleNavClick}
              >
                Policy MIS
              </NavLink>
              <NavLink
                to="/issuer/invoice"
                className={activeLink}
                onClick={handleNavClick}
              >
                Invoice
              </NavLink>
            </>
          )}

          {/* ===================== DEALER / DEFAULT ===================== */}
          {role !== "Admin" && role !== "Issuer" && (
            <>
              {/* Insurance Dropdown */}
              <div>
                <button
                  onClick={() => setOpenInsurance(!openInsurance)}
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-300 hover:bg-gray-800 transition rounded-md"
                >
                  <span>Insurance</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${openInsurance && "rotate-90"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openInsurance ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <NavLink
                    to="/new_insurance"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    New Insurance
                  </NavLink>
                  <NavLink
                    to="/renew_insurance"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Renew Insurance
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/wallet"
                className={activeLink}
                onClick={handleNavClick}
              >
                Wallet
              </NavLink>
              <NavLink
                to="/invoice"
                className={activeLink}
                onClick={handleNavClick}
              >
                Invoice
              </NavLink>
              <NavLink
                to="/comm_statement"
                className={activeLink}
                onClick={handleNavClick}
              >
                Commission Statement
              </NavLink>

              {/* Other Services */}
              <div>
                <button
                  onClick={() => setOpenOther(!openOther)}
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-300 hover:bg-gray-800 transition rounded-md"
                >
                  <span>Other Services</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${openOther && "rotate-90"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openOther ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <NavLink
                    to="/endorsement"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Endorsement
                  </NavLink>
                  <NavLink
                    to="/cancellation"
                    className={activeDropdown}
                    onClick={handleNavClick}
                  >
                    Cancellation
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/price_list"
                className={activeLink}
                onClick={handleNavClick}
              >
                Price List
              </NavLink>
              <NavLink
                to="/policy_download"
                className={activeLink}
                onClick={handleNavClick}
              >
                Policy Download
              </NavLink>
              <NavLink
                to="/policy_mis"
                className={activeLink}
                onClick={handleNavClick}
              >
                Policy MIS
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR TOGGLE BUTTON */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-1/2 transform -translate-y-1/2 z-50 bg-gray-900 text-white rounded-r-full p-1 pl-0 shadow-lg transition-all duration-500
            ${isOpen ? "left-64" : "left-0"}`}
        >
          {isOpen ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
        </button>
      )}

      {/* OVERLAY */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
