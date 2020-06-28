import React from 'react';
import './App.css';
import bookclub from './bookclub.jpg'
 
const home = () => {
    return (
       
      <div className="App">

      <body>
        <div className="App-header">
        <h1>Welcome to Circles of Awareness!</h1><br></br><hr></hr><br></br>
        <h2>
            Our Mission Statement
          </h2><br></br>
          <h3>
          Providing a platform in which individuals can engage with social, historical, and political issues in order to have a better understanding of the communities around us            </h3>
        <br></br><br></br><img src={bookclub} alt="Book Club" width="700" height="533"></img>
        </div>
      </body>
    </div>
    );
}
 
export default home;