import { Plus } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/base/Button";
import Pagination from "../components/base/Pagination"; // ⬅ Make sure path is correct

const ROWS_PER_PAGE = 10;

const DealerListTable = ({
  data = [],
  noDataMessage = "No dealer records available.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  // Slice Data for Current Page
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
      <div className="flex max-[460px]:flex-col justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Dealer List
        </h2>

        <Button className="flex max-[460px]:justify-center items-center gap-1">
          <Plus />
          <NavLink to="/admin/add_new_dealer">Add New Dealer</NavLink>
        </Button>
      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* 🖥 Desktop Table */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb]">DID</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Dealer Name</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Mobile No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Email</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">City</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">
                    Dealership Manufacture
                  </th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1]">
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.did}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.dealerName}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.mobile}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.email}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.city}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.manufacturer}</td>
                    <td className="p-4 border border-[#c4c8cb] flex gap-3">
                      <NavLink
                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-2.5 rounded-lg"
                        to="/admin/dealer_detail"
                      >
                        View
                      </NavLink>
                      <NavLink
                        className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg"
                        to="/admin/edit_dealer"
                      >
                        Edit
                      </NavLink>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 📱 Mobile Cards */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.dealerName}</span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>DID:</strong> {item.did}</p>
                    <p><strong>Mobile:</strong> {item.mobile}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>City:</strong> {item.city}</p>
                    <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
                  </div>

                  <div className="flex gap-4 mt-3">
                    <NavLink
                      to="/admin/dealer_detail"
                      className="bg-green-500 hover:bg-green-600 text-white py-1 px-2.5 rounded-lg"
                    >
                      View
                    </NavLink>
                    <NavLink
                      to="/admin/edit_dealer"
                      className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg"
                    >
                      Edit
                    </NavLink>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">
                      Delete
                    </button>
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

      {/* Pagination Component */}
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

export default DealerListTable;
