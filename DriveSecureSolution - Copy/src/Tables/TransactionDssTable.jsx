import React, { useEffect } from "react";
import { Eye, Plus } from "lucide-react";
import Button from "../components/base/Button";
import { NavLink } from "react-router-dom";

const TransactionHistoryDssTable = ({
  data = [],
  noDataMessage = "No transaction records available.",
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
        Transaction History
      </h2>
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* ---------- DESKTOP TABLE (DSS Style A) ---------- */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    S.No
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Dealer name
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Transaction Number
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    City
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Remark
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Action
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
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium text-[#e36e53]">
                      {item.amount}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb] break-all">
                      {item.transactionNumber}
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
                      {item.remark}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      <NavLink
                        to="/admin/payment_details"
                      >
                        <Eye className="cursor-pointer" />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ---------- MOBILE CARD VIEW ---------- */}
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      {item.transactionNumber}
                    </span>

                    <span
                      className={`text-sm font-medium ${item.status?.toLowerCase() === "approved"
                        ? "text-[#22c55e]"
                        : item.status?.toLowerCase() === "pending"
                          ? "text-[#eab308]"
                          : "text-[#ef4444]"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>S.No:</strong> {index + 1}
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

                    <p className="flex items-center gap-2 mt-2">
                      <strong>Action:</strong>{" "}
                      <td className="px-4 py-3 border border-[#c4c8cb]">
                        <NavLink
                          to="/admin/payment_details"
                        >
                          <Eye className="cursor-pointer" />
                        </NavLink>
                      </td>
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

export default TransactionHistoryDssTable;
