import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import useRepositoryDetails from "../../hooks/useRepositoryDetails";
import './repositoryDetail.scss';
import star from '../../assets/star.png';
import forked from '../../assets/forked.png';
import issue from '../../assets/issue.png';
import CopyRepUrls from "../CopyRepUrl/copyRepUrl";

const RepositoryDetail = () => {
    const { state } = useLocation();
    const { ownerName, repoName, ownerAvatar } = state;
    const { isLoading, data, error } = useRepositoryDetails({ ownerName, repoName });
    const { name, description, forks, stargazers_count, open_issues, clone_url, created_at, updated_at, topics } = data;
    const created_date = new Date(created_at);
    const updated_date = new Date(updated_at);
    // format date from API
    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    if (isLoading) return <Loader />;
    if (error) return "try again";

    return (data ? (
        <div className="container repository-details" >
            <div className="row">
                <aside className="col-3 left">
                    <img className="avatar-image" src={ownerAvatar} alt="Owner Avatar" />
                    <h4> {ownerName}</h4>
                </aside>

                <section className="col-6">
                    <h1>{name}</h1>
                    <CopyRepUrls textUrl={clone_url} />
                    <div className="repository-details__description">
                        <h3>Repository Description</h3>
                        <div className="description-body">{description}</div>
                    </div>

                    <div className="repository-details__dates">
                        <div className="repository-details__date">
                            <h5>Created:</h5>
                            <p>{formatDate(created_date)}</p>
                        </div>

                        <div className="repository-details__date">
                            <h5>Last Updated:</h5>
                            <p>{formatDate(updated_date)}</p>
                        </div>
                    </div>


                    <div className="repository-details__topics">
                        {
                            topics?.map((topic, i) => {
                                return (
                                    <div className="repository-details__topics__topic" key={i}>
                                        {topic}
                                    </div>
                                )
                            })
                        }
                    </div>

                </section>

                <aside className="col-3 right" >
                    <div className="repository-details__stats">
                        <div title="Number of Stars" className="repository-details__stat"><img src={star} alt="star icon" /> {stargazers_count}</div>
                        <div title="Number of Forks" className="repository-details__stat"><img src={forked} alt="fork icon" />{forks}</div>
                        <div title="Number of Issues" className="repository-details__stat"><img src={issue} alt="fork icon" />{open_issues}</div>
                    </div>

                </aside>

            </div>
        </div>


    ) : "No data available"
    );
}

export default RepositoryDetail;