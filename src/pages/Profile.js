import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Link } from 'react-router-dom';
import { Repos } from '../components/Repos';

export const Profile = ({match}) => {
    const {getUser, getRepos, user, loading, repos} = useContext(GithubContext)

    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Loading...</p>
    }


    const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists} = user
    return (
        <>
         <h1>Profile page</h1>
         <Link to={'/'} className="btn btn-link">Home page</Link>

        <div className="card mb-4 hover-zoom">
            <div className="cardbody">
                <div className="row">
                    <div className="col-sm-12 text-center pt-4">
                        <img src={avatar_url} alt="user" 
                        style={{width: '300px', border: '2px solid #ccc'}}/>
                        <h1>{name}</h1>
                        { location && <p>Location: {location}</p> } 
                        <div className="col pb-4" >
                            { bio && 
                            <>
                            <h3>BIO</h3>
                            <p>{bio}</p>
                            </>
                            }
                            <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Open profile on github</a>
                            <ul style={{listStyleType: 'none'}}>
                                 { login && <li>
                                   <strong>Username: </strong>{login}
                                  </li>}
                                  { company && <li>
                                   <strong>Company: </strong>{company}
                                  </li>}
                                  { blog && <li>
                                   <strong>website: </strong>{blog}
                                  </li>}
                            </ul>
                                  <div className="badge badge-primary mr-2 p-2">Followers: {followers}</div>
                                  <div className="badge badge-success mr-2 p-2">Following: {following}</div>
                                  <div className="badge badge-info mr-2 p-2">Repositories: {public_repos}</div>
                                  <div className="badge badge-dark mr-2 p-2">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Repos repos={repos}/>
        </>
    )
}