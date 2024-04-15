// endpoint http://138.197.116.196:3006/yield/current with method GET
import {ICurrentYield} from "../interfaces/Rewards";
import { useCallback, useEffect, useState } from "react";
import CurrentYield from "../hooks/mocks/CurrentYield.json";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
mock.onGet('http://138.197.116.196:3006/yield/current').reply(200, CurrentYield);

export function useFetchCurrentYield ()  {
    const [currentYield, setCurrentYield] = useState<ICurrentYield>();
    const [loading, setLoading] = useState<boolean>(false);
    const fetchCurrentYield = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://138.197.116.196:3006/yield/current');
            if (!response.status) {
                throw new Error("Failed to fetch current yield");
            }
            const data = response.data;
            setCurrentYield(data);
        } catch (error) {
            console.error("Error fetching current yield:", error);
        }
        finally {
            setLoading(false);
        }
    }
    ,[]);
    useEffect(() => {
        fetchCurrentYield();
    }, [fetchCurrentYield]);
    return {
        currentYield,
        loading,
        fetchCurrentYield
    };
}



