import React from "react";

const Bredcrumb = ({
  heading = "Create New Insurrance",
  page = "New Insurance",
}) => {
  return (
    <div className="w-full py-5 ">
      <div className="flex flex-wrap px-6 w-full justify-between items-center gap-3">
        <h2 className="text-2xl font-semibold text-primary w-full ">
          {heading}
        </h2>
        {/* <div className="flex px-6 py-1.5 bg-gray-900 w-full justify-end font-semibold text-secondary items-center gap-1">
          <p className="text-light">Home</p>
          <span className="text-light">/</span>
          <p className="text-primary">{page}</p>
        </div> */}
      </div>
      <hr className="text-secondary w-full opacity-50"/>
    </div>
  );
};

export default Bredcrumb;
