import { useEffect, useState } from 'react';
import { fetchApiData } from '../api';

const useRepositories = ({topic, sort, itemsPerPage, currentPage}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const apiUrl = `https://api.github.com/search/repositories?q=${topic}&sort=${sort}&per_page=${itemsPerPage}&page=${currentPage}`;
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchApiData(apiUrl);
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        }

        fetchData();
    }, [topic, sort, itemsPerPage, currentPage]);

    return { isLoading, data, error };
}

export default useRepositories;