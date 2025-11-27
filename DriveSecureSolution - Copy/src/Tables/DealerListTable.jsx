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
      <div className="flex max-[460px]:flex-col justify-between mb-5">
        <div>
          <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
            Dealer List
          </h2>
        </div>
        <Button className="flex max-[460px]:justify-center items-center gap-1">
          <Plus />
          <NavLink to="/admin/add_new_dealer">
            Add New Dealer
          </NavLink>
        </Button>


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
                    <td className="p-4.5 rounded-sm border border-[#c4c8cb] flex gap-3 justify-between">
                      <button className="bg-green-500 text-md hover:bg-green-600 text-white py-1 px-2.5 rounded-lg"><NavLink
                        to="/admin/dealer_detail"
                      >
                        View
                      </NavLink></button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg"><NavLink
                        to="/admin/edit_dealer"
                      >
                        Edit
                      </NavLink></button>
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">Delete</button>
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
                  <div className="flex w-full gap-4 mt-3">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2.5 rounded-lg"><NavLink
                      to="/admin/dealer_detail"
                    >
                      View
                    </NavLink></button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2.5 rounded-lg"><NavLink
                      to="/admin/edit_dealer"
                    >
                      Edit
                    </NavLink></button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2.5 rounded-lg">Delete</button>
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
