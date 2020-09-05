import React from 'react';
import OctocatImage from '../github-octocat.svg'

export const Octocat = () => {
const imgStyle = {
    textAlign: 'center'
  };
return (
    <div style={imgStyle}>      
        <img className="col-sm-6 ml-5" src={OctocatImage} alt="octocat" /> 
    </div>
)

}