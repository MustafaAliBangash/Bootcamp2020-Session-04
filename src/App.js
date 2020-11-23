import './App.css';
import React, { useState } from 'react';
import {Message} from './Message.js'  

function App() {

  let [count, setcount] = useState(0);
  let [isMorning, setMorning] = useState(true)
  
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />

      <button onClick={()=> setcount(count + 1)}>
        Update Counter</button>   
        
        <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
 