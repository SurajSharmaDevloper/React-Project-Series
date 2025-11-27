import React from "react";

const CommisionStatementTable = ({
  data = [],
  noDataMessage = "No business records available.",
}) => {
  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Commission Statement Table
      </h2>

      {/* Scrollable Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb] scrollbar-thin scrollbar-thumb-[#e36e53] scrollbar-track-[#f5f5f5]">
        {tableData.length > 0 ? (
          <table className="min-w-[2400px] text-sm">
            {/* Table Header */}
            <thead className="bg-[#e36e53] text-white">
              <tr>
                {[
                  "UID",
                  "DSS Cort No",
                  "Policy No",
                  "Issue Date",
                  "RSD Red",
                  "First Name / Company Name",
                  "Last Name",
                  "Gender",
                  "Mobile",
                  "Email",
                  "Address",
                  "City",
                  "State",
                  "Model",
                  "Variant",
                  "Engine No",
                  "Chassis No",
                  "PA Coverage",
                  "DSS Plan Tenure",
                  "DSS Plan Type",
                  "Total JDV",
                  "Total Business GST",
                  "Total Business (in GST)",
                  "Dealer Code",
                  "Dealer Name",
                  "Payment Term Used",
                  "Payout Term Value (%)",
                  "Total Payout Before GST",
                  "TDS on Total Payout",
                  "Payout After TDS",
                  "GST on Total Payout",
                  "Total Payment Including GST",
                  "Gross Balance Deduction",
                  "Payment Adjust in Balance",
                  "Net Balance Deduction",
                  "Status",
                  "Policy Download",
                ].map((col, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-medium border border-[#c4c8cb] whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white text-[#2b3037]">
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#fff4f1] transition-colors"
                >
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.uid}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.dssCortNo}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.policyNo}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.issueDate}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.rsdRed}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.firstName}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.lastName}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.gender}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.mobile}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.email}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.address}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.city}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.state}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.model}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.variant}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.engineNo}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.chassisNo}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.paCoverage}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.planTenure}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.planType}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.totalJdv}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.totalBusinessGst}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.totalBusinessInGst}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.dealerCode}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.dealerName}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.paymentTermUsed}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.payoutTermValue}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.totalPayoutBeforeGst}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.tdsOnTotalPayout}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.payoutAfterTds}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.gstOnTotalPayout}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.totalPaymentIncludingGst}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.grossBalanceDeduction}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.paymentAdjustInBalance}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb]">
                    {item.netBalanceDeduction}
                  </td>
                  <td
                    className={`px-4 py-3 border border-[#c4c8cb] font-medium ${item.status?.toLowerCase() === "approved"
                      ? "text-[#22c55e]" // 🟢 Approved
                      : item.status?.toLowerCase() === "pending"
                        ? "text-[#eab308]" // 🟡 Pending
                        : "text-[#ef4444]" // 🔴 Rejected
                      }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-4 py-3 border border-[#c4c8cb] text-center">
                    {item.downloadUrl ? (
                      <a
                        href={item.downloadUrl}
                        download
                        className="px-3 py-1 rounded-md text-white bg-[#e36e53] hover:bg-[#c75d45] transition font-medium text-xs"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // Empty Message
          <div className="py-10 text-center text-gray-600 text-sm bg-white rounded-lg">
            {noDataMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommisionStatementTable;
