import React, { useState } from "react";
import Pagination from "../components/base/Pagination";
import ToggleButton from "../components/base/ToggleButton";

const ROWS_PER_PAGE = 5;

const IssuerWisePolicyReport = ({
  data = [],
  noDataMessage = "No records available.",
}) => {
  const [filterOption, setFilterOption] = useState("week");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    setCurrentPage(1); // when filter changes, reset page
  };

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins] border border-[#c4c8cb]">

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
            <svg className="w-4 h-4 text-[#111827]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
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
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1] transition-colors">
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

            {/* MOBILE CARD VIEW */}
            <div className="block md:hidden divide-y divide-[#c4c8cb]">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] border-b border-[#c4c8cb] transition-colors"
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

      {/* PAGINATION */}
      {data.length > ROWS_PER_PAGE && (
        <div className="mt-4 border border-[#c4c8cb] rounded-lg p-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      )}
    </div>
  );
};

export default IssuerWisePolicyReport;
