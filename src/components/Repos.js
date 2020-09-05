import React from 'react';
import './Repos.css'

export const Repos = ({repos}) => (
    <>
    {repos.map(repo => (
        <div className="card mb-3" key={repo.id}>
            <div className="card-body repo-hover">
                <h5>
                   <a href={repo.html_url} 
                      alt="repos" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      {repo.name}
                   </a>
                </h5>
            </div>
        </div>
    ))}
    </>
)