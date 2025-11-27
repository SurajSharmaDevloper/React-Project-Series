import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPrev = () => {},
  onNext = () => {},
}) => {
  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <div
        className="
          inline-flex items-center shadow-sm -space-x-px rounded-md
        "
        role="group"
      >
        {/* Previous */}
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`
            inline-flex items-center justify-center w-9 h-9
            border-2 border-primary bg-primary text-light
            hover:bg-neutral-300 hover:text-gray-900
            rounded-l-md
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page Info */}
        <button
          type="button"
          className="
            px-4 h-9 inline-flex items-center justify-center
            border-t border-b border-neutral-300
            bg-neutral-200 text-gray-800 text-sm font-medium
          "
        >
          {currentPage} of {totalPages}
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`
            inline-flex items-center justify-center w-9 h-9
            border-2 border-primary bg-primary text-light
            hover:bg-neutral-300 hover:text-gray-900
            rounded-r-md
            disabled:opacity-40 disabled:cursor-not-allowed
          `}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
