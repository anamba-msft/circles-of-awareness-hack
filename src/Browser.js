import React from 'react';
import './Browser.css';

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
    }
  ];
 
const nestedLists = [list];

const browser = () => {
    return (

       <div>
           <div>
               <h1>Browse Bookclubs</h1>
           </div>
         <ul>
         {nestedLists.map((nestedList, index) => (
           <ul key={index}>
             {nestedList.map(item => (
               <li key={item.name}>
                 <div>{item.name}</div>
                 <div>Topic: {item.topic}</div>
                 <div>Leader: {item.leader}</div>
                 <div>Start Date: {item.startDate}</div>
                 <div>End Date: {item.endDate}</div>
               </li>
             ))}
           </ul>
         ))}
       </ul>
       </div>
    );
}
 
export default browser;