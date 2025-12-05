import React, { useState } from "react";
import Button from "../components/base/Button";
import Pagination from "../components/base/Pagination"; // <-- Add Pagination import

const ROWS_PER_PAGE = 10;

const DealerWisePriceListTable = ({
  data = [],
  noDataMessage = "No price records available.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  // Slice Data for pagination
  const paginatedData = data.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Dealer Wise Price List
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* 🖥️ Desktop Table */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Make</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Model</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">IDV</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Premium</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Status</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1]">
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.make}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.model}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb] text-[#e36e53] font-medium">
                      ₹{item.idv}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">₹{item.premium}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.status}</td>

                    <td className="px-4 py-3 border border-[#c4c8cb] flex justify-center gap-3">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 📱 Mobile Responsive Cards */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div key={index} className="p-4 bg-white hover:bg-[#fff4f1]">
                  <div className="font-semibold text-[#2b3037] mb-2">
                    {item.make} {item.model}
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>IDV:</strong>{" "}
                      <span className="text-[#e36e53] font-medium">₹{item.idv}</span>
                    </p>
                    <p>
                      <strong>Premium:</strong> ₹{item.premium}
                    </p>
                    <p>
                      <strong>Status:</strong> {item.status}
                    </p>

                    <div className="flex gap-4 mt-3">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-10 text-center text-gray-600 bg-white rounded-lg">
            {noDataMessage}
          </div>
        )}
      </div>

      {/* Pagination */}
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

export default DealerWisePriceListTable;
