import React, { useEffect } from "react";
import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import Button from "../components/base/Button";
import { NavLink } from "react-router-dom";

const IssuerDssTable = ({
  data = [],
  noDataMessage = "No issuer records available.",
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
      <div className="flex justify-between mb-5">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Issuer List
        </h2>
        <Button className="flex items-center gap-1">
          <Plus size={16} />
          <NavLink
            to="/admin/add_new_issuer"

          >
            Add New Issuer
          </NavLink>
        </Button>
      </div>


      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* ---------- Desktop Table ---------- */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Issuer ID
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Issuer Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Mobile No
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    PAN No
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Aadhar No
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
                      {item.issuerId}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.issuerName}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.mobile}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.pan}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.aadhar}
                    </td>

                    {/* Status Toggle */}
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-9 h-5 bg-neutral-300 peer-focus:outline-none border-0 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:bg-[#e36e53] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                      </label>
                    </td>

                    {/* ACTION BUTTONS */}
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
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white hover:bg-[#fff4f1] transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#2b3037]">
                      {item.issuerName}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Issuer ID:</strong> {item.issuerId}
                    </p>
                    <p>
                      <strong>Mobile:</strong> {item.mobile}
                    </p>
                    <p>
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p>
                      <strong>PAN:</strong> {item.pan}
                    </p>
                    <p>
                      <strong>Aadhar:</strong> {item.aadhar}
                    </p>

                    <p className="flex items-center gap-2">
                      <strong>Status:</strong>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.status}
                        />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 relative transition-all">
                          <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                        </div>
                      </label>
                    </p>
                  </div>

                  <div className="flex gap-4 mt-3">
                    <Eye className="cursor-pointer text-[#53e385]" />
                    <Pencil className="cursor-pointer text-[#e36e53]" />
                    <Trash2 className="cursor-pointer text-red-500" />
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

export default IssuerDssTable;
