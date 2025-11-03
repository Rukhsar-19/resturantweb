import React, { useEffect, useState } from 'react'
import Standout from '../Components/Standout'
import { restMenuService } from '../services/GlobalService';
import { IMenu } from '../@types/ApiResponse';
import axios from 'axios';

const StandoutScreen = () => {

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStandout();
    }, [])

    const getStandout = async () => {
        let response = await restMenuService();
        // const response = await axios.get("/api/Restaurant/5/menu");
        if (response) {
            console.log("Response:: ",response);
            setData(response);
            setLoading(true);
        }
    }

    return (
        <>
            <Standout data={data} loading={loading} />
        </>
    )
}
export default StandoutScreen;


