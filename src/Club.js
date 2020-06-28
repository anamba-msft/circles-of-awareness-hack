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
    <h1>Welcome to Lifting Black Voices and Authors!</h1>
     <h2>Our book club is focused on reading books written by Black authors. We are currently open for people to join!</h2>
    <p> <b>Club Leader:</b> Jane Doe</p>
     <p>Timeline: July 1st - August 1st</p>
 
 <p>Currently discussing: The Hate U Give by Angie Thomas</p>
 <p>Past discussions: An American Marriage by Tayari Jones </p>
 <p>Future discussions: Between the World and Me by Ta-Nehisi Coates</p>
 <button type="button">Request to Join!</button>
 </div> 
 </div>
 )
}
 
export default club;