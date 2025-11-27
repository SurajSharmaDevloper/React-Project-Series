import React, { useState, useEffect } from "react";
import InputBox from "../components/base/InputBox";

const VehiclePriceTable = ({ initialData = [] }) => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    "Model Variant": "",
    "Ex Showroom price": "",
    "Insurance Amount": "",
    "Registration Amount": "",
    TOTAL: "",
  });

  // Allow only numbers
  const allowOnlyNumbers = (value) => {
    return value.replace(/[^0-9]/g, "");
  };

  // Update fields + handle number validation
  const updateField = (field, value) => {
    let newValue = value;

    if (field !== "Model Variant") {
      newValue = allowOnlyNumbers(value); // only numbers for price fields
    }

    setFormData((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  // AUTO CALCULATE TOTAL
  useEffect(() => {
    const ex = Number(formData["Ex Showroom price"] || 0);
    const ins = Number(formData["Insurance Amount"] || 0);
    const reg = Number(formData["Registration Amount"] || 0);

    const total = ex + ins + reg;

    setFormData((prev) => ({
      ...prev,
      TOTAL: total ? total.toString() : "",
    }));
  }, [
    formData["Ex Showroom price"],
    formData["Insurance Amount"],
    formData["Registration Amount"],
  ]);

  // Submit new row
  const handleSubmit = () => {
    setData([...data, formData]);
    setIsModalOpen(false);

    setFormData({
      "Model Variant": "",
      "Ex Showroom price": "",
      "Insurance Amount": "",
      "Registration Amount": "",
      TOTAL: "",
    });
  };

  const columns = Object.keys(formData);

  return (
    <div className="p-6 bg-[#fff9f9] rounded-xl">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
          Vehicle Price List
        </h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#e36e53] text-white px-4 py-2 rounded-md hover:bg-[#d45b46]"
        >
          + Add Vehicle
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
        <table className="hidden md:table min-w-full text-sm">
          <thead className="bg-[#e36e53] text-white">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left font-medium border border-[#c4c8cb]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white text-[#2b3037]">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-[#fff4f1] transition-colors">
                {columns.map((col) => (
                  <td key={col} className="px-4 py-3 border border-[#c4c8cb]">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* MOBILE CARDS */}
        <div className="block md:hidden divide-y divide-gray-200">
          {data.map((row, i) => (
            <div key={i} className="p-4 bg-white hover:bg-[#fff4f1] transition-colors">
              <p className="font-bold text-gray-800  mb-2">
                {row["Model Variant"]}
              </p>

              {columns.map((col) => (
                <p key={col} className="text-sm text-gray-700">
                  <strong>{col}: </strong> {row[col]}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] max-w-md rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Add Vehicle Details
            </h3>

            {/* Using InputBox component */}
            <div className="mb-3">
              <InputBox
                label="Model Variant"
                value={formData["Model Variant"]}
                onChange={(e) =>
                  updateField("Model Variant", e.target.value)
                }
                placeholder="Enter model name"
              />
            </div>

            <div className="mb-3">
              <InputBox
                label="Ex Showroom Price"
                value={formData["Ex Showroom price"]}
                onChange={(e) =>
                  updateField("Ex Showroom price", e.target.value)
                }
                placeholder="0"
              />
            </div>

            <div className="mb-3">
              <InputBox
                label="Insurance Amount"
                value={formData["Insurance Amount"]}
                onChange={(e) =>
                  updateField("Insurance Amount", e.target.value)
                }
                placeholder="0"
              />
            </div>

            <div className="mb-3">
              <InputBox
                label="Registration Amount"
                value={formData["Registration Amount"]}
                onChange={(e) =>
                  updateField("Registration Amount", e.target.value)
                }
                placeholder="0"
              />
            </div>

            <div className="mb-3">
              <InputBox
                label="TOTAL"
                value={formData["TOTAL"]}
                disabled
                className="bg-gray-100"
              />
            </div>


            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-[#e36e53] text-white hover:bg-[#d45b46]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclePriceTable;
