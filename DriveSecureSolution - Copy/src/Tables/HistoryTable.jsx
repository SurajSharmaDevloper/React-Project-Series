import { Download, Eye, Pencil, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import Button from "../components/base/Button";

const HistoryTable = ({
  data = [],
  noDataMessage = "No payment records available.",
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
      <div className=" mb-6 mt-3 flex justify-center sm:justify-between max-[650px]:flex-col">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Payment History
        </h2>
        <Button
          className="flex  items-center gap-2 bg-[#e36e53] hover:bg-[#d45f46] active:ring-2 active:ring-[#e36e53]/50 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          size="small"
          variant="primary"
        >
          <Download size={18} />
          Download Payment History
        </Button>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* 🖥️ TABLE for desktop & tablet */}
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
                    Reference ID
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Remarks
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
                      {item.sno}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium text-[#e36e53]">
                      {item.amount}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.referenceId}
                    </td>
                    <td
                      className={`px-4 py-3 border border-[#c4c8cb] font-medium
                        ${item.status?.toLowerCase() === "success" ||
                          item.status?.toLowerCase() === "approved"
                          ? "text-[#22c55e]" // 🟢 Success
                          : item.status?.toLowerCase() === "pending" ||
                            item.status?.toLowerCase() === "processing"
                            ? "text-[#eab308]" // 🟡 Pending
                            : "text-[#ef4444]" // 🔴 Failed
                        }`}
                    >
                      {item.status}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.remarks}
                    </td>
                    <td className="px-4 py-3 border flex justify-around border-[#c4c8cb]">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2.5 rounded-lg">View</button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg">Edit</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">Delete</button>
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
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between w-full mb-2">
                    <span className="font-semibold w-full text-[#2b3037]">
                      {item.referenceId}
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
                      <strong>Remarks:</strong> {item.remarks || "—"}
                    </p>
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
                    <div className="flex w-full gap-4 mt-3">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2.5 rounded-lg">View</button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg">Edit</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
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

export default HistoryTable;
