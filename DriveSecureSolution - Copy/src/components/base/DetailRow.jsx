import React from "react";

const DetailRow = ({ label, value }) => {
  return (
    <li className="w-full mb-3 flex flex-col sm:flex-row sm:items-center gap-2">
      <b className="sm:w-1/3 text-gray-700">{label}</b>
      <span className="sm:w-4/3 bg-white py-1.5 px-3 rounded-lg shadow-sm border border-neutral-300 text-gray-800">
        {value}
      </span>
    </li>
  );
};

export default DetailRow;
