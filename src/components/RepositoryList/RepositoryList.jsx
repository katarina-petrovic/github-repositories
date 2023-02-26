import RepositoryItem from "../RepositoryItem/RepositoryItem";
import "./repositoryList.scss";
const RepositoryList = ({ items }) => {
    return (
        <div className="repository-list">
            {
                items && items.map(item => {
                    const { id, name, forks_count, stargazers_count, owner } = item;
                    const { login, avatar_url } = owner;
                    return <RepositoryItem
                        key={id}
                        id={id}
                        name={name}
                        forks={forks_count}
                        stars={stargazers_count}
                        ownerName={login}
                        ownerAvatar={avatar_url}
                    />;
                }

                )
            }
        </div>

    )
}

export default RepositoryList;