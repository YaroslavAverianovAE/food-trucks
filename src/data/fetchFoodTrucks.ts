import { parse } from 'csv-parse/browser/esm';
import { FoodTruck } from './FoodTruck';

export const fetchFoodTrucks = async (filename: string): Promise<FoodTruck[]> => {
  const response = await fetch(`/${filename}`);
  const csvData = await response.text();
  return new Promise((resolve, reject) => {
    parse(
      csvData,
      {
        columns: true,
        skip_empty_lines: true
      },
      (error, records: Omit<FoodTruck, 'index'>[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(records.map((truck, index) => ({ ...truck, index })));
        }
      }
    );
  });
};
