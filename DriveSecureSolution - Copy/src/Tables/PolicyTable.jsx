import React, { useEffect } from "react";

const PolicyTable = ({
  data = [],
  noDataMessage = "No policy records available.",
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
        Policy History
      </h2>

      {/* Responsive Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* Table for medium & large screens */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    UID
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Policy No.
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Download
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
                      {item.uid}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.time}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.policyNo}
                    </td>
                    <td
                      className={`px-4 py-3 border border-[#c4c8cb] font-medium
                        ${item.status?.toLowerCase() === "approved"
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

            {/* Mobile Card Layout */}
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      {item.name}
                    </span>
                    <span
                      className={`text-sm font-medium
                        ${item.status?.toLowerCase() === "approved"
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
                      <strong>UID:</strong> {item.uid}
                    </p>
                    <p>
                      <strong>Policy No:</strong> {item.policyNo}
                    </p>
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {item.time}
                    </p>
                  </div>
                  <div className="mt-3 text-right">
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
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Empty Data
          <div className="py-10 text-center text-gray-600 text-sm bg-white rounded-lg">
            {noDataMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyTable;
