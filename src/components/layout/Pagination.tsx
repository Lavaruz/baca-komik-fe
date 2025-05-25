import Link from "next/link";

interface PaginationProps {
  pageParam: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ pageParam, onPageChange, totalPages }: PaginationProps) => {
  const getVisiblePages = (current: number, total: number) => {
    if (total <= 3) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current === 1) {
      return [1, 2, 3];
    } else if (current === total) {
      return [total - 2, total - 1, total];
    } else {
      return [current - 1, current, current + 1];
    }
  };

  const pageNumbers = getVisiblePages(pageParam, totalPages);

  return (
    <div className="flex justify-center gap-3 mt-6">
      <button
        onClick={() => onPageChange(pageParam - 1)}
        disabled={pageParam <= 1}
        className="disabled:text-main/50 disabled:border-main/50 text-main rounded-sm relative inline-flex items-center rounded-l-md px-2 py-1 border border-main ring-inset focus:z-20 focus:outline-offset-0"
      >
        <i className="uil uil-angle-left text-2xl"></i>
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(page);
          }}
          aria-current={pageParam === page ? "page" : undefined}
          className={`relative z-10 inline-flex items-center w-11 justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm ${
            pageParam === page ? "bg-main" : "bg-second"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(pageParam + 1)}
        disabled={pageParam >= totalPages}
        className="disabled:text-main/50 disabled:border-main/50 rounded-sm relative inline-flex items-center rounded-r-md px-2 py-1 border border-main ring-inset focus:z-20 focus:outline-offset-0"
      >
        <i className="uil uil-angle-right text-2xl text-main"></i>
      </button>
    </div>
  );
};

export default Pagination;
