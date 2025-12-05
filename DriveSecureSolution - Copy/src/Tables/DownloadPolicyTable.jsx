import React, { useState } from "react";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 10;

const DownloadPolicyTable = ({
  data = [],
  noDataMessage = "No policies available for download.",
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
    <div className="p-6 bg-[#fff9f9] rounded-xl border border-[#c4c8cb]">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Policy Downloads
      </h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* Desktop Table */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Policy No.
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Download Policy
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#fff4f1] transition-colors"
                  >
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.policyNo}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb] text-center">
                      {item.downloadUrl ? (
                        <a
                          href={item.downloadUrl}
                          download
                          className="px-3 py-1 rounded-md bg-[#e36e53] text-white hover:bg-[#c75d45] transition font-medium text-xs"
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

            {/* Mobile Layout */}
            <div className="block md:hidden divide-y divide-[#c4c8cb]">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] border-b border-[#c4c8cb]"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {item.policyNo}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                    <p>
                      <strong>Policy No:</strong> {item.policyNo}
                    </p>
                  </div>

                  <div className="mt-3 text-right">
                    {item.downloadUrl ? (
                      <a
                        href={item.downloadUrl}
                        download
                        className="px-3 py-1 rounded-md bg-[#e36e53] text-white hover:bg-[#c75d45] transition font-medium text-xs"
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
          <div className="py-10 text-center text-gray-600">{noDataMessage}</div>
        )}
      </div>

      {/* Pagination */}
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

export default DownloadPolicyTable;
