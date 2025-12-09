import React, { useState } from "react";
import Pagination from "../components/base/Pagination";
import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import Button from "../components/base/Button";
import { NavLink } from "react-router-dom";

const ROWS_PER_PAGE = 5;

const InsuranceTable = ({
    data = [],
    noDataMessage = "No insurance records found.",
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

    const paginatedData = data.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );

    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () =>
        currentPage < totalPages && setCurrentPage(currentPage + 1);

    const columns = [
        "S.No",
        "Policy No",
        "Name",
        "Vehicle Type",
        "Vehicle Capacity",
        "Nominee",
        "Nominee Age",
        "Nominee Relation",
        "Action",
    ];

    return (
        <div className="p-6 bg-[#fff9f9] rounded-xl border border-[#c4c8cb] font-[Poppins]">
            <div className="mb-6 mt-3 flex justify-center items-baseline-last sm:justify-between max-[650px]:flex-col">
                <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
                    Insurance Policy Table
                </h2>

                <Button className="flex justify-center text-sm"><NavLink to="/new_insurance" className='flex items-center gap-1 '><Plus size={16} />Create New Insurance </NavLink></Button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb] scrollbar-thin scrollbar-thumb-[#e36e53] scrollbar-track-gray-100">
                {paginatedData.length > 0 ? (
                    <table className="min-w-[1100px] text-sm">
                        <thead className="bg-[#e36e53] text-white">
                            <tr>
                                {columns.map((col, idx) => (
                                    <th
                                        key={idx}
                                        className="px-4 py-3 font-medium border border-[#c4c8cb] whitespace-nowrap"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="text-[#2b3037]">
                            {paginatedData.map((item, i) => (
                                <tr
                                    key={i}
                                    className="hover:bg-[#fff4f1] transition duration-150 text-nowrap"
                                >
                                    {/* Auto S.No */}
                                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium">
                                        {i + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                                    </td>

                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.policyNo}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.name}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.vehicleType}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.vehicleCapacity}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.nominee}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.nomineeAge}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.relation}</td>

                                    {/* Action Buttons */}
                                    <td className="px-4 py-3 border border-[#c4c8cb] flex gap-3 justify-center">
                                        <Eye className="cursor-pointer text-blue-600 hover:scale-110 transition" />
                                        <Pencil className="cursor-pointer text-green-600 hover:scale-110 transition" />
                                        <Trash2 className="cursor-pointer text-red-600 hover:scale-110 transition" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="py-10 text-center text-gray-600 text-sm">
                        {noDataMessage}
                    </div>
                )}
            </div>

            {data.length > ROWS_PER_PAGE && (
                <div className="mt-4 border border-[#c4c8cb] rounded-md p-3">
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

export default InsuranceTable;
