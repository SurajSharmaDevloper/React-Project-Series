import React, { useState, useEffect } from "react";
import InputBox from "../components/base/InputBox";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 10;

const VehiclePriceTable = ({ initialData = [] }) => {
  // Default Dynamic Structure
  const defaultStructure = {
    "Model Variant": "",
    "Ex Showroom price": "",
    "Insurance Amount": "",
    "Registration Amount": "",
    TOTAL: "",
  };

  const initialStructure =
    initialData.length > 0 ? initialData[0] : defaultStructure;

  const [formData, setFormData] = useState(initialStructure);
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const columns = Object.keys(formData);

  /* ------------------------------------------------
   * PAGINATION
   * ------------------------------------------------ */
  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  /* ------------------------------------------------
   * ONLY NUMBERS ALLOWED
   * ------------------------------------------------ */
  const allowOnlyNumbers = (value) => value.replace(/[^0-9]/g, "");

  const updateField = (field, value) => {
    const numericField = field !== "Model Variant" && field !== "TOTAL";

    setFormData((prev) => ({
      ...prev,
      [field]: numericField ? allowOnlyNumbers(value) : value,
    }));
  };

  /* ------------------------------------------------
   * AUTO CALCULATE TOTAL (NO RE-RENDER LOOP)
   * ------------------------------------------------ */
  useEffect(() => {
    const numberCols = columns.filter(
      (col) => col !== "Model Variant" && col !== "TOTAL"
    );

    const numbers = numberCols.map((col) => Number(formData[col] || 0));
    const total = numbers.reduce((sum, n) => sum + n, 0);

    if (String(total) !== formData.TOTAL) {
      setFormData((prev) => ({ ...prev, TOTAL: String(total) }));
    }
  }, [
    formData["Ex Showroom price"],
    formData["Insurance Amount"],
    formData["Registration Amount"],
  ]);

  /* ------------------------------------------------
   * ADD NEW ROW
   * ------------------------------------------------ */
  const handleSubmit = () => {
    const newData = [...data, formData];
    setData(newData);

    // Reset form
    const resetObj = {};
    columns.forEach((key) => (resetObj[key] = ""));
    setFormData(resetObj);

    setIsModalOpen(false);

    // Auto-jump to last page
    setCurrentPage(Math.ceil(newData.length / ROWS_PER_PAGE));
  };

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
                <th key={col} className="px-4 py-3 border border-[#c4c8cb]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-[#fff4f1]">
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
          {paginatedData.map((row, i) => (
            <div key={i} className="p-4 bg-white hover:bg-[#fff4f1]">
              <p className="font-bold text-gray-800 mb-2">
                {row[columns[0]]}
              </p>

              {columns.map((col) => (
                <p key={col} className="text-sm text-gray-700">
                  <strong>{col}:</strong> {row[col]}
                </p>
              ))}
            </div>
          ))}
        </div>
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

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] max-w-md rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Add Vehicle Details
            </h3>

            {columns.map((col) => (
              <div key={col} className="mb-3">
                <InputBox
                  label={col}
                  value={formData[col]}
                  onChange={(e) => updateField(col, e.target.value)}
                  disabled={col === "TOTAL"}
                  placeholder={`Enter ${col}`}
                />
              </div>
            ))}

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
