import { useState, useEffect } from 'react'
import Loader from '../components/Loading'
// import SearchBar from './SearchBar'

const Card = ({ data, isLoading }) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepoData = () => {
            fetch(data.repos_url)
                .then(res => res.json())
                .then(data => setRepos(data))
        }

        fetchRepoData()
    }, [data])

    const reposNames = repos.map((repo, index) => {
        return (
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo" key={index}>{repo.name}</a>
        )
    })

    if (isLoading) {
        return (
            <div className="container">
                <Loader />
            </div>
        );
    } else {
        return (
            < div className="container" >
                <div className="card">
                    <div className="card-pic">
                        <img src={data.avatar_url} alt="Github Avatar" />
                    </div>
                    <div className="card-info">
                        <h1 className="card-name">{data.name}</h1>
                        <h2 className="card-github">@<a href={data.html_url}>{data.login}</a></h2>
                        <p className="card-bio">{data.bio}</p>
                        <ul className="card-stats">
                            <li>{data.followers} <strong>Followers</strong></li>
                            <li>{data.followers} <strong>Following</strong></li>
                            <li>{data.public_repos} <strong>Repositories</strong></li>
                        </ul>
                        <h3>Repositories:</h3>
                        <ul className="card-repos">
                            {reposNames}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Card
