import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const club = () => {
 return (
    <div>
               <div className="navBar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="Browse">Browse Clubs</Link></li>
                        <li href="#">Join</li>
                    </ul>
         </div>
  <div className = "App-header">      
 <h1>Welcome to our book club!</h1>
 <p>Our book club is focused on learning about the prison industrial complex. We are currently open for people to join!</p>
 <p><b>Club Leader:</b> Jane Doe</p>
 <p>Timeline: July 1st - August 1st
 </p>
 <p>Currently discussing: The New Jim Crow by Michelle Alexander</p>
 <p>Past discussions: Ted Talk: The Human Stories behind Mass Incarceration by Eve Abrams</p>
 <p>Future discussions: Prison State : The Challenge of Mass Incarceration by Bert Useem and Anne Morrison Peihl, Movie: Just Mercy</p>
 <button type="button">Request to Join!</button>
 </div> 
 </div>
 )
}
 
export default club;