import { useNavigate } from "react-router-dom";

const RepositoryItem = ({ id, name, ownerName, ownerAvatar, stars, forks }) => {
    const navigate = useNavigate();

    // redirecting to Repository Details page
    const goToRepositoryDetails = () => {
        navigate(`/repository/${id}`, {
            state: {
                ownerName: ownerName,
                repoName: name
            },
        });
    };
    return (
        <div className="repository-item"  onClick={goToRepositoryDetails}>
            <div className="repository-item__owner">
                <span><img src={ownerAvatar} alt={ownerName} /></span><span>{ownerName}</span>
            </div>
            <div className="repository-item__name">
                {name}
            </div>
            <div className="repository-item__stars-forks">
                <div className="repository-item__stars-forks__item">
                    {stars}
                </div>
                <div className="repository-item__stars-forks__item">
                    {forks}
                </div>
            </div>
        </div>
    );
}

export default RepositoryItem;