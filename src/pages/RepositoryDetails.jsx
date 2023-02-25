import { useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useRepositoryDetails from "../hooks/useRepositoryDetails";

const RepositoryDetails = () => {
    const {state} = useLocation();
    const {isLoading, data, error} = useRepositoryDetails({ownerName: state.ownerName, repoName: state.repoName});

    if (isLoading) return <Loader />;
    if (error) return "try again";
    return (data ? (
        <div className="repository-details">
            { console.log(data)}
        </div>
    ) : "No data available"
    );
  }
  
  export default RepositoryDetails;