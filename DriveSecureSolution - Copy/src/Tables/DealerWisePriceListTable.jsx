import React from "react";
import Button from "../components/base/Button";
import { Delete, Edit2 } from "lucide-react";

const DealerWisePriceListTable = ({
  data = [],
  noDataMessage = "No price records available.",
}) => {
  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl">
      {/* Header */}
      <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
        Dealer Wise Price List
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* 🖥️ Desktop Table */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Make
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    IDV
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Premium
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Status
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
                      {item.make}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.model}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium text-[#e36e53]">
                      ₹{item.idv}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      ₹{item.premium}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.status}
                    </td>

                    {/* Action Buttons */}
                    <td className="px-4 py-3 border border-[#c4c8cb] flex justify-center gap-3">
                      <Button
                        className="bg-amber-400 hover:bg-amber-500"
                        size="small"
                      >
                        Edit
                      </Button>
                      <Button
                        className="bg-red-400 hover:bg-red-500"
                        size="small"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 📱 Mobile Cards */}
            <div className="block md:hidden divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      {item.make} {item.model}
                    </span>

                    <div className="flex gap-3 text-lg">
                      <button className="text-[#2b3037] hover:text-[#e36e53]">
                        <Edit2 />
                      </button>
                      <button className="text-[#2b3037] hover:text-red-600">
                        <Delete />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>IDV:</strong>{" "}
                      <span className="text-[#e36e53] font-medium">
                        ₹{item.idv}
                      </span>
                    </p>
                    <p>
                      <strong>Premium:</strong> ₹{item.premium}
                    </p>
                    <p>
                      <strong>Status:</strong> {item.status}
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

export default DealerWisePriceListTable;
