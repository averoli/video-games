import { PaginationProps } from "../../types";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
