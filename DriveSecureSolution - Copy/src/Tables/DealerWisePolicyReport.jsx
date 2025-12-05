import React, { useState } from "react";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 5;

const DealerWisePolicyReport = ({
  data = [],
  noDataMessage = "No records available.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

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
      {/* TITLE */}
      <h2 className="text-xl font-semibold text-[#111827] mb-4 border-b-2 border-[#e36e53] inline-block">
        Dealer-Wise Policy Report
      </h2>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* DESKTOP TABLE */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Dealer Name
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Policy Generated
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Payout (%)
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb] text-left font-medium">
                    Monthly Payout ($)
                  </th>
                </tr>
              </thead>

              <tbody className="text-[#111827]">
                {paginatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#fff4f1] transition-colors"
                  >
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.dealerName}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.generated}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.payoutPercent}%
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      ${item.monthlyPayout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* MOBILE VIEW */}
            <div className="block md:hidden divide-y divide-[#c4c8cb]">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] border-b border-[#c4c8cb]"
                >
                  <p className="font-semibold text-[#111827]">
                    {item.dealerName}
                  </p>

                  <div className="text-sm text-gray-700 mt-2 space-y-1">
                    <p>
                      <b>Policy Generated:</b> {item.generated}
                    </p>
                    <p>
                      <b>Payout:</b> {item.payoutPercent}%
                    </p>
                    <p>
                      <b>Monthly Payout:</b> ${item.monthlyPayout}
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
        <div className="mt-4 border border-[#c4c8cb] rounded-md p-3">
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

export default DealerWisePolicyReport;
