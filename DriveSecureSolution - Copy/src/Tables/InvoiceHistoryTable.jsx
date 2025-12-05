import React, { useEffect, useState } from "react";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 10;

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
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins]">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Invoice History
      </h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* DESKTOP TABLE */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border">S.No</th>
                  <th className="px-4 py-3 border">Date</th>
                  <th className="px-4 py-3 border">Amount</th>
                  <th className="px-4 py-3 border">Invoice Number</th>
                  <th className="px-4 py-3 border">GST Status</th>
                  <th className="px-4 py-3 border">Status</th>
                  <th className="px-4 py-3 border">Remarks</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1] transition-colors">
                    <td className="px-4 py-3 border">
                      {index + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                    </td>

                    <td className="px-4 py-3 border">{item.date}</td>

                    <td className="px-4 py-3 border text-[#e36e53] font-medium">
                      {item.amount}
                    </td>

                    <td className="px-4 py-3 border">{item.invoiceNumber}</td>

                    {/* GST Status */}
                    <td
                      className={`
                        px-4 py-3 border font-medium
                        ${item.gstStatus?.toLowerCase() === "filed"
                          ? "text-[#22c55e]"
                          : item.gstStatus?.toLowerCase() === "pending"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                        }
                      `}
                    >
                      {item.gstStatus}
                    </td>

                    {/* Payment Status */}
                    <td
                      className={`
                        px-4 py-3 border font-medium
                        ${item.status?.toLowerCase() === "success" ||
                          item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]"
                          : item.status?.toLowerCase() === "pending" ||
                            item.status?.toLowerCase() === "processing"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                        }
                      `}
                    >
                      {item.status}
                    </td>

                    <td className="px-4 py-3 border">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* MOBILE CARDS */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">
                      <b>Invoice No: </b> {item.invoiceNumber}
                    </span>

                    <span
                      className={`
                        text-sm font-medium
                        ${item.status?.toLowerCase() === "success" ||
                          item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]"
                          : item.status?.toLowerCase() === "pending" ||
                            item.status?.toLowerCase() === "processing"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>S.No:</strong>{" "}
                      {index + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                    </p>

                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>

                    <p>
                      <strong>Amount:</strong>{" "}
                      <span className="text-[#e36e53] font-medium">{item.amount}</span>
                    </p>

                    <p>
                      <strong>GST Status:</strong>{" "}
                      <span
                        className={`
                          font-medium
                          ${item.gstStatus?.toLowerCase() === "filed"
                            ? "text-[#22c55e]"
                            : item.gstStatus?.toLowerCase() === "pending"
                              ? "text-[#eab308]"
                              : "text-[#ef4444]"
                          }
                        `}
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
          <div className="py-10 text-center text-gray-600">{noDataMessage}</div>
        )}
      </div>

      {/* PAGINATION */}
      {data.length > ROWS_PER_PAGE && (
        <div className="mt-4">
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

export default InvoiceHistoryTable;
