import { Delete, Edit, EyeOffIcon } from "lucide-react";
import Button from "../components/base/Button";
import { Plus } from "lucide-react"
import React from "react";
import { NavLink } from "react-router-dom";

const DealerListTable = ({
  data = [],
  noDataMessage = "No dealer records available.",
}) => {
  const tableData = data.length > 0 ? data : [];

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl">
      {/* Header */}
      <div className="flex justify-between mb-5">
        <div>
          <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
            Dealer List
          </h2>
        </div>
        <NavLink
          to="/admin/add_new_dealer"
        >
          <Button className="flex items-center gap-1">
            <Plus />
            Add New Dealer
          </Button>
        </NavLink>

      </div>


      {/* Responsive Container */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        {tableData.length > 0 ? (
          <>
            {/* 🖥️ Desktop Table */}
            <table className="hidden md:table min-w-full text-sm">
              <thead className="bg-[#e36e53] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    DID
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Dealer Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Mobile No
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    City
                  </th>
                  <th className="px-4 py-3 text-left font-medium border border-[#c4c8cb]">
                    Dealership Manufacture
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
                      {item.did}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.dealerName}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.mobile}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.city}
                    </td>
                    <td className="px-4 py-3 border border-[#c4c8cb]">
                      {item.manufacturer}
                    </td>

                    {/* Actions */}
                    <td className="p-4 rounded-sm border border-[#c4c8cb] flex gap-5 text-lg">
                      <Button
                        size="small"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <NavLink
                          to="/admin/dealer_detail"
                        >
                          View
                        </NavLink>
                      </Button>
                      <Button
                        size="small"
                        className="bg-amber-400 hover:bg-amber-500"
                      >
                        <NavLink
                          to="/admin/edit_dealer"
                        >
                          Edit
                        </NavLink>
                      </Button>
                      <Button size="small">Delete</Button>
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
                      {item.dealerName}
                    </span>

                    {/* Actions */}
                    <div className="flex gap-3 text-lg">
                      <button className="text-[#2b3037] hover:text-[#e36e53]">
                        <EyeOffIcon />
                      </button>
                      <button className="text-[#2b3037] hover:text-[#e36e53]">
                        <Edit />
                      </button>
                      <button className="text-[#2b3037] hover:text-red-600">
                        <Delete />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>DID:</strong> {item.did}
                    </p>
                    <p>
                      <strong>Mobile:</strong> {item.mobile}
                    </p>
                    <p>
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p>
                      <strong>City:</strong> {item.city}
                    </p>
                    <p>
                      <strong>Manufacturer:</strong> {item.manufacturer}
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

export default DealerListTable;
