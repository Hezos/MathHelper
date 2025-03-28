import './App.css';
import React, { useState, useEffect } from 'react';




function App() {
  
  const [count, setCount] = useState(0);

  var data = {
    xPos: 10,
    meta:'This is data from a variable'
  }

  setInterval(() => {
    setCount(count + 1);
  }, 100);

  return (
    <div className="App">
      <h1>
        Learn math with my sidekick!
      </h1>
      <p>
        {data.xPos}
      </p>
      <svg width="400" height="120">
        <rect id='myRect' x={count} y={data.xPos} width={100}
         height="100" stroke="red" strokeWidth="6" fill="blue" />
      </svg>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
