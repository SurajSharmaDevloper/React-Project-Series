import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Button from "../components/base/Button";
import { NavLink } from "react-router-dom";
import Pagination from "../components/base/Pagination"; // <-- Add Pagination import

const ROWS_PER_PAGE = 10;

const IssuerDssTable = ({
  data = [],
  noDataMessage = "No issuer records available.",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  // Pagination Slice
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
      <div className="flex justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Issuer List
        </h2>

        <Button size="small" className="py-1.5 flex items-center">
          <Plus size={16} />
          <NavLink to="/admin/add_new_issuer">Add New Issuer</NavLink>
        </Button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {paginatedData.length > 0 ? (
          <>
            {/* ---------- Desktop Table ---------- */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Issuer ID</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Issuer Name</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Mobile No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Email</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">PAN No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Aadhar No</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Status</th>
                  <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white text-[#2b3037]">
                {paginatedData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fff4f1]">
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.issuerId}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.issuerName}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.mobile}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.email}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.pan}</td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.aadhar}</td>

                    {/* Status Toggle */}
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-neutral-300 rounded-full peer peer-checked:bg-[#e36e53] after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-2 py-3 border border-[#c4c8cb] flex gap-3">
                      <button className="bg-green-500 text-white py-1 px-2.5 rounded-lg">View</button>
                      <button className="bg-orange-500 text-white py-1 px-2.5 rounded-lg">Edit</button>
                      <button className="bg-red-500 text-white py-1 px-2.5 rounded-lg">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ---------- Mobile Cards ---------- */}
            <div className="block md:hidden divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <div key={index} className="p-4 bg-white hover:bg-[#fff4f1]">
                  <div className="font-semibold text-[#2b3037] mb-2">
                    {item.issuerName}
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Issuer ID:</strong> {item.issuerId}</p>
                    <p><strong>Mobile:</strong> {item.mobile}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>PAN:</strong> {item.pan}</p>
                    <p><strong>Aadhar:</strong> {item.aadhar}</p>

                    <p className="flex items-center gap-2">
                      <strong>Status:</strong>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 relative transition-all">
                          <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                        </div>
                      </label>
                    </p>
                  </div>

                  <div className="flex gap-4 mt-3">
                    <button className="bg-green-500 text-white py-1 px-2.5 rounded-lg">View</button>
                    <button className="bg-orange-500 text-white py-1 px-2.5 rounded-lg">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2.5 rounded-lg">Delete</button>
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

export default IssuerDssTable;
