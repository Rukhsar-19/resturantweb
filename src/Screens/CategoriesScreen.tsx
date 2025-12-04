import React, { useEffect, useState } from 'react';
import Categories from '../Components/Categories';
import { restaurantService } from '../services/GlobalService';
import { IRestaurant } from '../@types/ApiResponse';

const CategoriesScreen = () => {
    const [result, setResult] = useState<IRestaurant[]>([]);
    useEffect(() => {
        GetRestData();
    }, [])
    const GetRestData = async () => {
        try {
            const response = await restaurantService();
            console.log("Fetched data", response);
            if (response) {
                setResult(response);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <Categories result={result} />
        </>
    )
}
export default CategoriesScreen;
