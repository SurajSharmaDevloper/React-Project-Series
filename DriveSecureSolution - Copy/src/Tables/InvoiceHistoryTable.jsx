import React, { useEffect } from "react";

const InvoiceHistoryTable = ({
  data = [],
  noDataMessage = "No invoice records available.",
}) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins]">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Invoice History
      </h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* 🖥️ TABLE for medium and large screens */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    S.No
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Invoice Number
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    GST Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Remarks
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {tableData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#fff4f1] transition-colors"
                  >
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.sno}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium text-[#e36e53]">
                      {item.amount}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.invoiceNumber}
                    </td>

                    {/* GST Status */}
                    <td
                      className={`px-4 py-3 border border-[#c4c8cb] font-medium
                        ${item.gstStatus?.toLowerCase() === "filed"
                          ? "text-[#22c55e]" // 🟢 Filed
                          : item.gstStatus?.toLowerCase() === "pending"
                            ? "text-[#eab308]" // 🟡 Pending
                            : "text-[#ef4444]" // 🔴 Not Filed / Rejected
                        }`}
                    >
                      {item.gstStatus}
                    </td>

                    {/* Payment Status */}
                    <td
                      className={`px-4 py-3 border border-[#c4c8cb] font-medium
                        ${item.status?.toLowerCase() === "success" ||
                          item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]"
                          : item.status?.toLowerCase() === "pending" ||
                            item.status?.toLowerCase() === "processing"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                        }`}
                    >
                      {item.status}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 📱 MOBILE Card Layout */}
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] border-b transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      <span className="flex flex-col"><b>Invoice No : </b>{item.invoiceNumber}</span>
                    </span>
                    <span
                      className={`text-sm font-medium
                        ${item.status?.toLowerCase() === "success" ||
                          item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]"
                          : item.status?.toLowerCase() === "pending" ||
                            item.status?.toLowerCase() === "processing"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>S.No:</strong> {item.sno}
                    </p>
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                    <p>
                      <strong>Amount:</strong>{" "}
                      <span className="text-[#e36e53] font-medium">
                        {item.amount}
                      </span>
                    </p>
                    <p>
                      <strong>GST Status:</strong>{" "}
                      <span
                        className={`font-medium
                          ${item.gstStatus?.toLowerCase() === "filed"
                            ? "text-[#22c55e]"
                            : item.gstStatus?.toLowerCase() === "pending"
                              ? "text-[#eab308]"
                              : "text-[#ef4444]"
                          }`}
                      >
                        {item.gstStatus}
                      </span>
                    </p>
                    <p>
                      <strong>Remarks:</strong> {item.remarks || "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // No Data Message
          <div className="py-10 text-center text-gray-600 text-sm bg-white rounded-lg">
            {noDataMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceHistoryTable;
