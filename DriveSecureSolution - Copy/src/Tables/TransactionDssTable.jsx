import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import Button from "../components/base/Button";
import { NavLink } from "react-router-dom";
import Pagination from "../components/base/Pagination"; // <-- add this

const ROWS_PER_PAGE = 10;

const TransactionHistoryDssTable = ({
  data = [],
  noDataMessage = "No transaction records available.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  // Paginated Data
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

  // Load Google Font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl font-[Poppins]">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Transaction History
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* ---------- DESKTOP TABLE ---------- */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb]">S.No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">
                    Dealer name
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Date</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Amount</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">
                    Transaction Number
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">City</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Status</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Remark</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1]">
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {index + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.name}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb] text-[#e36e53] font-medium">
                      {item.amount}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb] break-all">
                      {item.txn}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.city}
                    </td>

                    {/* Status */}
                    <td
                      className={`px-4 py-3 border border-[#c4c8cb] font-medium ${item.status?.toLowerCase() === "approved"
                        ? "text-[#22c55e]"
                        : item.status?.toLowerCase() === "pending"
                          ? "text-[#eab308]"
                          : "text-[#ef4444]"
                        }`}
                    >
                      {item.status}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.remark || "—"}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      <NavLink to="/admin/payment_details">
                        <Eye className="cursor-pointer" />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ---------- MOBILE VIEW ---------- */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm text-wrap text-[#2b3037]">
                      {item.txn}
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
                      <span className="text-[#e36e53] font-medium">
                        {item.amount}
                      </span>
                    </p>

                    <p>
                      <strong>Remark:</strong> {item.remark || "—"}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`font-medium ${item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]"
                          : item.status?.toLowerCase() === "pending"
                            ? "text-[#eab308]"
                            : "text-[#ef4444]"
                          }`}
                      >
                        {item.status}
                      </span>
                    </p>

                    <button className="bg-green-500 mt-3 py-1 px-3 text-light rounded">
                      <NavLink to="/admin/payment_details">View</NavLink>
                    </button>
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

      {/* ---------- PAGINATION ---------- */}
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

export default TransactionHistoryDssTable;
