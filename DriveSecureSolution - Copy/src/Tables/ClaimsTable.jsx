import React, { useState } from "react";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 5;

const ClaimStatusTable = ({ data = [], noDataMessage = "No claim records available." }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

    const paginatedData = data.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );

    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    const columns = [
        "S.No",
        "Policy No",
        "Customer Name",
        "Date of Claim Intimation",
        "Status",
        "Claim No",
        "Surveyor Name",
        "Contact No",
        "Report Status",
        "Settlement Status",
        "Payment Status",
    ];

    return (
        <div className="p-6 bg-[#fff9f9] rounded-xl border border-[#c4c8cb] font-[Poppins]">
            <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
                Claim Status Table
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb] scrollbar-thin scrollbar-thumb-[#e36e53] scrollbar-track-gray-100">
                {paginatedData.length > 0 ? (
                    <table className="min-w-[1500px] text-sm">
                        <thead className="bg-[#e36e53] text-white">
                            <tr>
                                {columns.map((col, idx) => (
                                    <th
                                        key={idx}
                                        className="px-4 py-3 text-left font-medium border border-[#c4c8cb] whitespace-nowrap"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="text-[#2b3037]">
                            {paginatedData.map((item, i) => (
                                <tr key={i} className="hover:bg-[#fff4f1] transition text-nowrap">

                                    {/* Auto-generated Serial Number */}
                                    <td className="px-4 py-3 border border-[#c4c8cb] font-medium">
                                        {i + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                                    </td>

                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.policyNo}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.customerName}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.claimIntimationDate}</td>

                                    <td
                                        className={`px-4 py-3 border border-[#c4c8cb] font-medium 
                      ${item.status?.toLowerCase() === "settled"
                                                ? "text-[#22c55e]"
                                                : item.status?.toLowerCase() === "pending" ||
                                                    item.status?.toLowerCase() === "on process"
                                                    ? "text-[#eab308]"
                                                    : "text-[#ef4444]"
                                            }`}
                                    >
                                        {item.status}
                                    </td>

                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.claimNo}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.surveyorName}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.contactNo}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.reportStatus}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.settlementStatus}</td>
                                    <td className="px-4 py-3 border border-[#c4c8cb]">{item.paymentStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="py-8 text-center text-gray-500 text-sm">
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

export default ClaimStatusTable;
