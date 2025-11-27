import React, { useState } from "react";
import ToggleButton from "../components/base/ToggleButton"; // your reusable toggle

const IssuerWisePolicyReport = ({
  data = [],
  noDataMessage = "No records available.",
}) => {
  const [filterOption, setFilterOption] = useState("week");

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    // 💡 You can call API here with filterOption
    // Example: fetchData(e.target.value);
  };

  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins]">

      {/* HEADER */}
      <div className="flex max-[400px]:flex-col max-[400px]:items-start gap-3 justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#111827] border-b-2 border-[#e36e53] inline-block">
          Issuer-Wise Policy Report
        </h2>

        {/* FILTER DROPDOWN */}
        <div className="relative inline-block">
          <select
            value={filterOption}
            onChange={handleFilterChange}
            className="px-4 py-2 text-sm bg-white border border-[#c4c8cb] rounded-lg text-[#111827] cursor-pointer focus:outline-none focus:border-[#e36e53] pr-10 appearance-none"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="4month">Last 4 Months</option>
            <option value="6month">Last 6 Months</option>
            <option value="year">This Year</option>
          </select>

          {/* CUSTOM ARROW */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="w-4 h-4 text-[#111827]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* DESKTOP TABLE */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Issuer Name
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Policy Generate
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Pending
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Cancelled
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#111827]">
                {tableData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#fff4f1] transition-colors"
                  >
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.issuerName}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.generated}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.pending}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.cancelled}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      <ToggleButton defaultChecked={true} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* MOBILE CARD LAYOUT */}
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between">
                    <b className="text-[#111827]">{item.issuerName}</b>
                    <ToggleButton defaultChecked={true} />
                  </div>

                  <div className="text-sm text-gray-700 mt-2 space-y-1">
                    <p>
                      <b>Policy Generate:</b> {item.generated}
                    </p>
                    <p>
                      <b>Pending:</b> {item.pending}
                    </p>
                    <p>
                      <b>Cancelled:</b> {item.cancelled}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-10 text-center text-gray-600 text-sm bg-white rounded-lg">
            {noDataMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default IssuerWisePolicyReport;
