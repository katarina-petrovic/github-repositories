import { useEffect, useState } from 'react';
import { fetchApiData } from '../api';

const useRepositoryDetails = ({ownerName, repoName}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchApiData(`https://api.github.com/repos/${ownerName}/${repoName}`);
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        }
        
        fetchData();
    }, [ownerName, repoName]);

    return { isLoading, data, error };
}

export default useRepositoryDetails;