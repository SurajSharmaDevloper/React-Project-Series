import React, { useState } from "react";
import Pagination from "../components/base/Pagination";

const ROWS_PER_PAGE = 10;

const VehiclePriceList = ({ data = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

    const paginatedData = data.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((p) => p - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((p) => p + 1);
    };

    return (
        <div className="p-6 bg-[#fff9f9] rounded-xl">
            <h2 className="text-xl font-semibold text-[#2b3037] mb-4 border-b-2 border-[#e36e53] inline-block">
                Vehicle Price List
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg border border-[#c4c8cb]">
                {paginatedData.length > 0 ? (
                    <>
                        {/* 🖥 DESKTOP TABLE */}
                        <table className="hidden md:table min-w-full text-sm">
                            <thead className="bg-[#e36e53] text-white">
                                <tr>
                                    <th className="px-4 py-3 border">Make</th>
                                    <th className="px-4 py-3 border">Model</th>
                                    <th className="px-4 py-3 border">IDV</th>
                                    <th className="px-4 py-3 border">Premium</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white text-[#2b3037]">
                                {paginatedData.map((item, index) => (
                                    <tr key={index} className="hover:bg-[#fff4f1]">
                                        <td className="px-4 py-3 border border-[#c4c8cb]">{item.make}</td>
                                        <td className="px-4 py-3 border border-[#c4c8cb]">{item.model}</td>
                                        <td className="px-4 py-3 border border-[#c4c8cb] text-[#e36e53] font-medium">
                                            ₹{item.idv}
                                        </td>
                                        <td className="px-4 py-3 border border-[#c4c8cb]">₹{item.premium}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* 📱 MOBILE CARDS */}
                        <div className="block md:hidden divide-y divide-gray-200">
                            {paginatedData.map((item, index) => (
                                <div key={index} className="p-4 bg-white  hover:bg-[#fff4f1]">
                                    <p>
                                        <strong>Make:</strong> {item.make}
                                    </p>
                                    <p>
                                        <strong>Model:</strong> {item.model}
                                    </p>
                                    <p>
                                        <strong>IDV:</strong>{" "}
                                        <span className="text-[#e36e53] font-medium">
                                            ₹{item.idv}
                                        </span>
                                    </p>
                                    <p >
                                        <strong>Premium:</strong> ₹{item.premium}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="py-10 text-center text-gray-500">{noDataMessage}</div>
                )}
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
        </div>
    );
};

export default VehiclePriceList;
