import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion';

/*
function PositionHolderX(xValue, mainRectWidth, degree){
  return Math.cos(degree) * (xValue-mainRectWidth);
}
*/
/*
function PositionHolderY(xValue, mainRectWidth, degree){
  return Math.sin(degree) * (xValue-mainRectWidth);
}
*/

function App() {
  
  const [count, setCount] = useState(0);

  setInterval(() => {
    //setCount(count + 1);
    //RotateElement('myRect', count);
  }, 1000);

  //Change the rectanlge to a component with parameters

/*
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>

*/

  return (
    <div className="App">
      <h1>
        Learn math with my sidekick!
      </h1>
      <motion.div
          style={{width:window.innerWidth, height:window.innerHeight*0.9}}
          animate={{
            rotate:count,
            transition: { duration: 0 }
          }} >  
        <svg style={{width:window.innerWidth, height:window.innerHeight*0.9}}>
          <rect width={`${window.innerWidth/5}`} height={`${window.innerHeight/40}`} x={`${window.innerWidth/2-window.innerWidth/10}`}
          y={`${window.innerHeight*0.9/2 - window.innerHeight/80}`} rx={`${window.innerWidth*0.005}`} ry={`${window.innerHeight*0.005}`}
          fill="blue" />
        </svg>
      </motion.div>

      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count - 30);
          //window.requestAnimationFrame(Draw);
        }}>
        Add to left
      </button>
      <button>
        Restart balance
      </button>
      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count + 30);  
          //window.requestAnimationFrame(Draw);
        }}>
        Add to right
      </button>
    </div>
  );
}

export default App;