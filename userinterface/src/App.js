import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function RotateElement(id, degree){
  document.getElementById(id).style.transform = `rotateZ(${degree}deg)`;
}


function App() {
  
  const [count, setCount] = useState(0);

  setInterval(() => {
    //setCount(count + 1);
    //RotateElement('myRect', count);
  }, 1000);

  //Change the rectanlge to a component with parameters
  return (
    <div className="App">
      <h1>
        Learn math with my sidekick!
      </h1>
      <svg class="border border-4" width="100%" height={window.innerHeight * 0.9} >
        <rect style={{'transform-origin': 'center center'}} id='myRect' x={window.innerWidth/2 - window.innerWidth/10} 
        y={window.innerHeight*0.9/2} width={window.innerWidth/5} 
        height={window.innerHeight*0.03} fill="blue" transform={`rotateZ(${count}deg)`} />
      </svg>  
      <button onClick={() => {
          setCount(count + 30);  
          RotateElement("myRect", count);
        }}>
        Rotate balance
      </button>
    </div>
  );
}

export default App;
