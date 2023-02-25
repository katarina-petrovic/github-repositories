
const RepositoryItem = ({ name, ownerName, ownerAvatar, stars, forks }) => {
    return (
        <div className="repository-item">
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