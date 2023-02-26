import { useNavigate } from "react-router-dom";
import './repositoryItem.scss';
import star from '../../assets/star.png';
import forked from '../../assets/forked.png';

const RepositoryItem = ({ id, name, ownerName, ownerAvatar, stars, forks }) => {
    const navigate = useNavigate();

    // redirecting to Repository Details page
    const goToRepositoryDetails = () => {
        navigate(`/repository/${id}`, {
            state: {
                ownerName: ownerName,
                repoName: name,
                ownerAvatar: ownerAvatar
            },
        });
    };
    return (
        <div className="repository-item" onClick={goToRepositoryDetails}>
            <div className="repository-item__owner">
                <span><img src={ownerAvatar} alt={ownerName} /></span><span>{ownerName}</span>
            </div>
            <div className="repository-item__name">
                {name}
            </div>
            <div className="repository-item__stars-forks">
                <div className="repository-item__stars-forks__item">
                    <span><img src={star} alt="fork icon" /></span><span>{stars}</span>
                </div>
                <div className="repository-item__stars-forks__item">
                    <span><img src={forked} alt="fork icon" /></span><span>{forks}</span>
                </div>
            </div>
        </div>
    );
}

export default RepositoryItem;