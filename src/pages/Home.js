import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContext';
import './Home.css'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)
    return (
        <>
         <Search />
        <div className="row">

        { loading ? <p className="text-center">Loading...</p>
        : users.map( user => (
                <div className="col-sm-4 mb-4 hover-zoom" key={user.id}>
                <Card user={user}/>
              </div>
            ))
        }
        
        
        </div>
        </>
    )
}