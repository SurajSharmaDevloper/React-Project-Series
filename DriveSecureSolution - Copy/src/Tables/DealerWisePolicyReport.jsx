import React from "react";

const DealerWisePolicyReport = ({
  data = [],
  noDataMessage = "No records available.",
}) => {
  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins]">
      {/* TITLE */}
      <h2 className="text-xl font-semibold text-[#111827] mb-4 border-b-2 border-[#e36e53] inline-block">
        Dealer-Wise Policy Report
      </h2>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
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
                {tableData.map((item, index) => (
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
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
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
    </div>
  );
};

export default DealerWisePolicyReport;
