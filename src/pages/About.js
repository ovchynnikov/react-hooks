import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

export const About = () => {

  const {userMe} = useContext(GithubContext)
  const github = useContext(GithubContext)
  github.getMe()
  console.log(userMe)
    return (
        <div className="jumbotron jumbotron-fluid">
          
    <div className="container col-sm-4">
       <h3 className="display-4">About me </h3> <br />
          <Nav>
              <li className="nav-item active">
                <Nav.Link href="https://github-api-ovch.web.app/">Home</Nav.Link>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="https://www.linkedin.com/in/oleksii-ovchynnikov-159675129/">My LinkedIn</a>
              </li>
          </Nav>
          <Card user={userMe}/>

       </div>
     </div>
  )
}