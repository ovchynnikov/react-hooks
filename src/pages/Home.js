import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContext';
import './Home.css'


export const Home = () => {

    const {loading, users} = useContext(GithubContext)
    return (
        <>
        <h3>This website shows open information about users via GitHub API </h3> <br/>
         <Search />
        <div className="row">

        { loading ? <p className="text-center">Loading...</p>
        : users.map( user => (
                <div className="col-sm-4 mb-4 hover-zoom" key={user.id}>
                <Card user={user}/>
              </div>
            )
     )}
        </div>
        </>
    )
}