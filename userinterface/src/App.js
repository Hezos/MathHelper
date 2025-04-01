import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion';

function RotateElement(id, degree){
  document.getElementById(id).style.transform = `rotate(${degree} ${window.innerWidth/2} ${window.innerHeight * 0.9/2})`;
}

function PositionHolderX(xValue, mainRectWidth, degree){
  return Math.cos(degree) * (xValue-mainRectWidth);
}

function PositionHolderY(xValue, mainRectWidth, degree){
  return Math.sin(degree) * (xValue-mainRectWidth);
}

function Draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight*0.9);
    //Place element in center
    ctx.translate(window.innerWidth/2, window.innerHeight*0.9 /2);
    const now = new Date();
    const sec = now.getSeconds();
    ctx.rotate((sec*Math.PI)/30);  
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.beginPath();
    ctx.rect(window.innerWidth/10*-1,window.innerHeight*0.9 /80*-1, window.innerWidth/5, window.innerHeight*0.9 /40);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //window.requestAnimationFrame(Draw(count));
  
}

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
      animate={{
      rotate:180,
      transition: { duration: 1 }
      }} >
    <p>Sample</p>
      </motion.div>
      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count - 30);
          window.requestAnimationFrame(Draw);
        }}>
        Add to left
      </button>
      <button>
        Restart balance
      </button>
      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count + 30);  
          window.requestAnimationFrame(Draw);
        }}>
        Add to right
      </button>
    </div>
  );
}

export default App;