import RepositoryItem from "../RepositoryItem/RepositoryItem";

const RepositoryList = ({items}) => {
    return (
        items && items.map(item => {
            const { id, name, forks_count, stargazers_count, owner } = item;
            const { login, avatar_url } = owner;
            return <RepositoryItem
                key={id}
                name={name}
                forks={forks_count}
                stars={stargazers_count}
                ownerName={login}
                ownerAvatar={avatar_url}
            />;
        }
        )

    )
}

export default RepositoryList;