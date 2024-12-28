import React, { startTransition } from 'react'

function Page2() {
  return (
    <div style={ { position :'absolute',backgroundColor: 'lightblue', textAlign:'cender', padding:'20px', height:'200px',width:'150px',top:'10px',left:'10px'}}>
       <h3>traveling service</h3>
       <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJ9XQ1uNbq-ingwJF97y2mEgHuhvdhqllig&s' ></img>
    
       <ul>
        <li>flight booking</li>
        <li>hotel reservation</li>
        <li>travel planing </li>
        <li>guided tours</li>
       </ul>

      
    </div>
  )
}

export default Page2
