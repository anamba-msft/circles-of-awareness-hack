import React from 'react';
import './Browser.css';
import './App.css'
import { Link } from 'react-router-dom';


const list = [
    {

      name: 'Lifting Black Voices and Authors',
      topic: 'Black Experience in America',
      leader: 'Jane Doe',
      startDate: '6/28/2020',
      endDate: '7/20/2020'
    },
    {
        name: 'Native American Traditions and History',
        topic: 'Indigenous Culture in North America',
        leader: 'Jane Doe',
        start: '4/30/2020',
        endDate: '5/29/2020'
    },
    {
        name: 'Books by Queer Authors',
        topic: 'LGBTQ+',
        leader: 'Jane Doe',
        start: '7/30/2020',
        endDate: '9/29/2020'
    },
    {
      name: 'Non-Western Philosophers',
      topic: 'Philosophy outside Western thought',
      leader: 'Jane Doe',
      start: '7/30/2020',
      endDate: '10/29/2020'
  },
  {
    name: 'Feminist Texts',
    topic: 'Feminism',
    leader: 'Jane Doe',
    start: '8/30/2020',
    endDate: '9/30/2020'
  },
  {
    name: 'Black Protagonists in Fiction',
    topic: 'Blacks in Literature',
    leader: 'Jane Doe',
    start: '8/30/2020',
    endDate: '9/30/2020'
  }
  
  ];
 
const nestedLists = [list];

const browser = () => {
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
           <div>
               <h1>Browse Bookclubs</h1>
           </div>
         <ul>
         {nestedLists.map((nestedList, index) => (
           <ul key={index}>
             {nestedList.map(item => (
               <li key={item.name}>
                 <div className = "Title"><Link to="/Club">{item.name}</Link></div>
                 <div>Topic: {item.topic}</div>
                 <div>Leader: {item.leader}</div>
                 <div>Start Date: {item.startDate}</div>
                 <div>End Date: {item.endDate}</div>
                 <br></br>
               </li>
             ))}
           </ul>
         ))}
       </ul>
       </div>
       </div>
    );
}
 
export default browser;