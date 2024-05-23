import React from 'react';
import './PerPageSelect.css';

export type PerPageHandler = (perPage: number) => void;

export const PER_PAGE_THIRTY = 30;
export const PER_PAGE_SIXTY = 60;
export const PER_PAGE_NINETY = 90;

interface PaginationParams {
  label: string;
  perPage: number;
  onPerPageChange: PerPageHandler;
}

const PerPageSelect: React.FC<PaginationParams> = ({ label, perPage, onPerPageChange }) => {
  return (
    <div className="per-page-select">
      <label>{label}:</label>
      <select className="per-page" value={perPage} onChange={(event) => onPerPageChange(Number(event.target.value))}>
        <option value={PER_PAGE_THIRTY}>30</option>
        <option value={PER_PAGE_SIXTY}>60</option>
        <option value={PER_PAGE_NINETY}>90</option>
      </select>
    </div>
  );
}

export default PerPageSelect;
