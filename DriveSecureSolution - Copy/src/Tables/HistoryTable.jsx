import { Download, Eye, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../components/base/Button";
import Pagination from "../components/base/Pagination"; // <-- ADD THIS

const ROWS_PER_PAGE = 10;

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
      <div className="mb-6 mt-3 flex justify-center sm:justify-between max-[650px]:flex-col">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Payment History
        </h2>

        <Button
          className="flex items-center gap-2 bg-[#e36e53] hover:bg-[#d45f46] text-white font-semibold px-6 py-3 rounded-xl"
          size="small"
          variant="primary"
        >
          <Download size={18} />
          Download Payment History
        </Button>
      </div>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* DESKTOP TABLE */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb]">S.No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Date</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Amount</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Reference ID</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Status</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Remarks</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={item.sno} className="hover:bg-[#fff4f1]">
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {index + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.date}</td>

                    <td className="px-4 py-3 border border-[#c4c8cb] text-[#e36e53] font-medium">
                      {item.amount}
                    </td>

                    <td className="px-4 py-3 border border-[#c4c8cb] break-all">
                      {item.referenceId}
                    </td>

                    <td
                      className={`
                        px-4 py-3 border border-[#c4c8cb] font-medium
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

                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.remarks}</td>

                    <td className="px-4 py-3 border border-[#c4c8cb] flex justify-around">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                        View
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* MOBILE CARDS */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div key={item.sno} className="p-4 bg-white hover:bg-[#fff4f1]">
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
                    <strong>Reference ID:</strong> {item.referenceId}
                  </p>
                  <p>
                    <strong>Remarks:</strong> {item.remarks}
                  </p>

                  <p
                    className={`
                      font-medium 
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
                  </p>

                  <div className="flex gap-3 mt-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                    <button className="bg-orange-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
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

export default HistoryTable;
