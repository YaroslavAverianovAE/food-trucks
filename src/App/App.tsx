import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from '../components/Loader/Loader';
import { PER_PAGE_THIRTY } from '../components/PerPageSelect/PerPageSelect';
import { fetchFoodTrucks } from '../data/fetchFoodTrucks';
import { FoodTruck } from '../data/FoodTruck';
import FoodTruckDetails from '../views/FoodTruckDetails/FoodTruckDetails';
import FoodTruckList from '../views/FoodTruckList/FoodTruckList';

function App() {
  const [trucks, setTrucks] = useState<FoodTruck[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [trucksPerPage, setTrucksPerPage] = useState(PER_PAGE_THIRTY);
  const totalPages = useMemo(() => Math.ceil(trucks.length / trucksPerPage), [trucks, trucksPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTrucksPerPageChange = (perPage: number) => {
    setTrucksPerPage(perPage);
    setCurrentPage(1);
  };

  useEffect(() => {
    (async () => {
      try {
        const trucks = await fetchFoodTrucks('Mobile_Food_Facility_Permit.csv');
        setTrucks(trucks);
        setIsLoading(false);
      }  catch (error) {
        console.error('Error on trucks fetching:', error);
        setIsLoading(false);
      }
    })();
  }, [])

  return (
    <div className="app">
      <h1 className="header">Food Truck Finder</h1>
      {
        isLoading
          ? <Loader/>
          : <Routes>
            <Route path="/" element={
              <FoodTruckList
                trucks={trucks}
                perPage={trucksPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
                onPerPageChange={handleTrucksPerPageChange}
                onPageChange={handlePageChange}
              />
            }/>
            <Route path="/truck/:index" element={<FoodTruckDetails trucks={trucks}/>}/>
          </Routes>
      }
    </div>
  );
}

export default App;
