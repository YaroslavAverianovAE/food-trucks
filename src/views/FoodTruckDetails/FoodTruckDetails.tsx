import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FoodTruckDetails.css';
import TextColumns, { TextColumnsData } from '../../components/TextColumns/TextColumns';
import { FoodTruck } from '../../data/FoodTruck';

interface FoodTruckDetailsParams {
  trucks: FoodTruck[];
}

const FoodTruckDetails: React.FC<FoodTruckDetailsParams> = ({ trucks }) => {
  const { index } = useParams<{ index: string }>();

  if (!index) {
    return <div className="food-truck-details">Error: ID parameter is required</div>;
  }

  const truck = trucks[Number(index)];

  if (!truck) {
    return <div className="food-truck-details">Food truck not found</div>;
  }

  const data: TextColumnsData = [
    ['Type:', truck.FacilityType],
    ['Location:', truck.LocationDescription],
    ['Address:', truck.Address],
    ['Status:', truck.Status],
    ['Food Items:', truck.FoodItems],
    ['Days/Hours:', truck.dayshours],
  ]


  return (
    <div className="food-truck-details">
      <h2>{truck.Applicant}</h2>
      <div className="food-truck-data">
        <TextColumns data={data}/>
      </div>
      <Link to="/" className="back-link">&lt; Back to List</Link>
    </div>
  );
};

export default FoodTruckDetails;
