import React from 'react';
import './Pagination.css';

export type PageChangeHandler = (page: number) => void;

interface PaginationParams {
  totalPages: number;
  currentPage: number;
  onPageChange: PageChangeHandler;
}

const Pagination: React.FC<PaginationParams> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={index + 1 === currentPage ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
