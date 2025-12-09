import React, { useState, useEffect } from "react";
import { Download, Eye, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../components/base/Button";

const ROWS_PER_PAGE = 10;

const EndorsementListTable = ({ data = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

    const paginatedData = data.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );

    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () =>
        currentPage < totalPages && setCurrentPage(currentPage + 1);

    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <div className="p-6 py-2 bg-[#fff9f9] rounded-xl font-[Poppins]">
            <div className="mb-6 mt-3 flex justify-center items-baseline-last sm:justify-between max-[650px]:flex-col">
                <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
                    Document Verification
                </h2>

                <Button className="flex justify-center text-sm"><NavLink to="/endorsement" className='flex items-center gap-1 '><Plus sizes={16} /> Add New Endorsement</NavLink></Button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
                {paginatedData.length > 0 ? (
                    <table className="min-w-full text-sm">
                        <thead className="bg-[#e36e53] text-white">
                            <tr>
                                <th className="px-4 py-3 border border-[#c4c8cb]">S.No</th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">Remarks</th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">Dealer Letter</th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">
                                    Aadhar Front
                                </th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">
                                    Aadhar Back
                                </th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">PAN Card</th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">Policy Copy</th>
                                <th className="px-4 py-3 border border-[#c4c8cb]">Action</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white text-[#2b3037]">
                            {paginatedData.map((item, index) => (
                                <tr key={index} className="hover:bg-[#fff4f1]">
                                    <td className="px-4 py-3 border border-[#c4c8cb]">
                                        {index + 1 + (currentPage - 1) * ROWS_PER_PAGE}
                                    </td>

                                    <td className="px-4 py-3 border border-[#c4c8cb]">
                                        {item.remark || "—"}
                                    </td>

                                    {/* Download Column Cells */}
                                    {[
                                        item.dealerLetter,
                                        item.aadharFront,
                                        item.aadharBack,
                                        item.panCard,
                                        item.policyCopy,
                                    ].map((file, i) => (
                                        <td key={i} className="px-4 py-3 border border-[#c4c8cb] text-center">
                                            {file ? (
                                                <a href={file} download className="text-[#e36e53] hover:text-[#b94f3c] transition">
                                                    <Download size={20} />
                                                </a>
                                            ) : (
                                                <Download size={20} className="text-gray-400 opacity-50 cursor-not-allowed" />
                                            )}
                                        </td>
                                    ))}

                                    {/* Action */}
                                    <td className="px-4 py-3 border border-[#c4c8cb] text-center">
                                        <div className="flex gap-3 mt-3">
                                            <button className="bg-green-500 text-white px-3 py-1 rounded">
                                                View
                                            </button>
                                            <button className="bg-orange-500 text-white px-3 py-1 rounded">
                                                Edit
                                            </button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="py-10 text-center text-gray-600 text-sm bg-white rounded-lg">
                        No records found
                    </div>
                )}
            </div>

            {/* Pagination */}
            {data.length > ROWS_PER_PAGE && (
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className="border px-4 py-2 rounded bg-gray-200"
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    <span className="text-gray-600">
                        {currentPage} / {totalPages}
                    </span>
                    <button
                        className="border px-4 py-2 rounded bg-gray-200"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default EndorsementListTable;
