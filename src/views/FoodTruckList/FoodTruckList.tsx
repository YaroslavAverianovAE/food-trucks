import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './FoodTruckList.css';
import Pagination, { PageChangeHandler } from '../../components/Pagination/Pagination';
import PerPageSelect, { PerPageHandler } from '../../components/PerPageSelect/PerPageSelect';
import { FoodTruck } from '../../data/FoodTruck';

interface FoodTruckListParams {
  trucks: FoodTruck[];
  totalPages: number;
  currentPage: number;
  perPage: number;
  onPageChange: PageChangeHandler;
  onPerPageChange: PerPageHandler;
}

const FoodTruckList: React.FC<FoodTruckListParams> = (
  { trucks, totalPages, currentPage, perPage, onPageChange, onPerPageChange }
) => {
  const trucksToShow = useMemo(() => {
    const end = currentPage * perPage;
    const start = end - perPage;
    return trucks.slice(start, end);
  }, [currentPage, perPage]);

  return (
    <div className="food-truck-list">
      <div className="food-truck-items">
        {trucksToShow.map((truck) => (
          <div key={truck.index} className="food-truck-item">
            <Link to={`/truck/${truck.index}`}>
              {truck.Applicant}
              <p className="food-truck-item-details">{truck.FoodItems}</p>
            </Link>
          </div>
        ))}
      </div>
      <PerPageSelect perPage={perPage} onPerPageChange={onPerPageChange} label="Trucks per page"/>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
    </div>
  );
};

export default FoodTruckList;
