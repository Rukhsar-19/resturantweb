import React, { useEffect, useState } from 'react';
import Categories from '../Components/Categories';
import { restaurantService } from '../services/GlobalService';
import { IRestaurant } from '../@types/ApiResponse';

const CategoriesScreen = () => {
    const [data, setData] = useState<IRestaurant[]>([]);

    useEffect(() => {
        const GetRestData = async () => {
            try {
                console.log('get resturant data ::')
                const response = await restaurantService();
                if (!response) {
                    console.log('response ::',response)
                    setData(response);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        GetRestData();

    }, [])
    return (
        <>
            <Categories data={data} />
        </>
    )
}

export default CategoriesScreen;