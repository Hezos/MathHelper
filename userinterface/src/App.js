import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { motion } from 'framer-motion';

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

//Solve drawings as pictures maybe?
function DrawBasic(posX, posY, width, height){
  //It has a + on the left side (x + something)
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.reset();
  //drawing the rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(posX-width/2, posY-height/2, width, height);

  ctx.fillStyle = "purple";
  ctx.fillRect(posX-width/2-width/12, posY-height*2.5, width/6, height);
  ctx.fillRect(posX-width/2+width-width/12, posY-height*2.5, width/6, height);
  
  ctx.fillRect(posX-width/2+width-width/12, posY-height*3.5, width/6, height);
  ctx.fillStyle = "gray";
  ctx.fillRect(posX-width/2-width/12, posY-height*3.5, width/6, height);
  
  ctx.fillStyle = "green";
  ctx.fillRect(posX-width/2-width/8, posY-height*1.5, width/4, height);
  ctx.fillRect(posX-width/2+width-width/8, posY-height*1.5, width/4, height);
  const circle = new Path2D();
  circle.arc(posX-width/2, posY+height/32, height*0.75, 0, 2 * Math.PI);
  circle.arc(posX-width/2 + width, posY+height/32, height*0.75, 0, 2 * Math.PI);

  ctx.fillStyle = "yellow";
  ctx.fill(circle);

  //Triangle
  ctx.beginPath();
  ctx.moveTo(posX+width/6, posY+height*2);
  ctx.lineTo(posX, posY+height/2);
  ctx.lineTo(posX-width/6, posY+height*2);
  ctx.fill();
}

//If there wasn't any reset it continues rotating over and over again.
function DrawRotated(degree, posX, posY, width, height){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.reset();



  //Rotated pole starts here.
  ctx.translate(posX, posY);

  ctx.rotate(degree);
  ctx.translate(-1*(posX), -1*(posY));

  // Rotated rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(posX-width/2, posY-height/2, width, height);

  ctx.translate(posX, posY);
  //End of rotated pole
  ctx.resetTransform();

  
  ctx.fillStyle = "purple";
  ctx.fillRect(posX-width/2-width/12 - (width/2- width/2*Math.cos(degree)) + width, posY-height*2.5 + width/2* Math.sin(degree), width/6, height);
  ctx.fillRect(posX-width/2+width-width/12 + (width/2- width/2*Math.cos(degree)) - width, posY-height*2.5 - width/2* Math.sin(degree), width/6, height);
  
  ctx.fillRect(posX-width/2+width-width/12 + (width/2- width/2*Math.cos(degree)) - width, posY-height*3.5 - width/2* Math.sin(degree), width/6, height);
  ctx.fillStyle = "gray";
  ctx.fillRect(posX-width/2-width/12 - (width/2- width/2*Math.cos(degree)) + width, posY-height*3.5 + width/2* Math.sin(degree), width/6, height);
  
  ctx.fillStyle = "green";
  ctx.fillRect(posX-width/2-width/8 - (width/2- width/2*Math.cos(degree)) + width, posY-height*1.5 + width/2* Math.sin(degree), width/4, height);
  ctx.fillRect(posX-width/2+width-width/8 + (width/2- width/2*Math.cos(degree)) - width, posY-height*1.5 - width/2* Math.sin(degree), width/4, height);
  const circle = new Path2D();
  circle.arc(posX-width/2 - (width/2- width/2*Math.cos(degree)) + width, posY+height/32 + width/2* Math.sin(degree), height*0.75, 0, 2 * Math.PI);
  circle.arc(posX-width/2 + (width/2- width/2*Math.cos(degree)), posY+height/32 - width/2* Math.sin(degree), height*0.75, 0, 2 * Math.PI);

  ctx.fillStyle = "yellow";
  ctx.fill(circle);

  //Triangle
  ctx.beginPath();
  ctx.moveTo(posX+width/6, posY+height*2);
  ctx.lineTo(posX, posY+height/2);
  ctx.lineTo(posX-width/6, posY+height*2);
  ctx.fill();



  
}

  const [count, setCount] = useState(0);

  setInterval(() => {
    //setCount(count + 1);
    //RotateElement('myRect', count);
  }, 1000);

  //Change the rectanlge to a component with parameters

/*
  

*/
//https://motion.dev/docs/react-quick-start
/*

      <motion.div
          style={{width:window.innerWidth, height:window.innerHeight*0.9}}
          animate={{
            rotate:count,
            transition: { duration: 0 }
          }} >  
        <svg  style={{width:window.innerWidth, height:window.innerHeight*0.9}}>
          <rect width={`${window.innerWidth/5}`} height={`${window.innerHeight/40}`} x={`${window.innerWidth/2-window.innerWidth/10}`}
          y={`${window.innerHeight*0.9/2 - window.innerHeight/80}`} rx={`${window.innerWidth*0.005}`} ry={`${window.innerHeight*0.005}`}
          fill="blue" />
        </svg>
      </motion.div>
      <svg class="position-absolute" style={{width:window.innerWidth, height:window.innerHeight*0.9}}>
      <rect width={`${window.innerWidth/10}`} height={`${window.innerHeight/20}`} x={`${window.innerWidth/2-window.innerWidth/10}`}
          y={`${window.innerHeight*0.9/2 - window.innerHeight/80}`} rx={`${window.innerWidth*0.005}`} ry={`${window.innerHeight*0.005}`}
          fill="red" />
      </svg>
*/


  return (
    <div className="App" >
      <h1>
        Learn math with my sidekick!
      </h1>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>
      <div >
      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count - 30);
          DrawRotated(-60, window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40);  
          //window.requestAnimationFrame(Draw);
        }}>
        Add to left
      </button>
      <button onClick={()=>{
        DrawBasic(window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40);
      }}>
        Restart balance
      </button>
      <button onClick={() => {
          //Set a different rotating sequence
          setCount(count + 30);
          DrawRotated(60, window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40);  
          //window.requestAnimationFrame(Draw);
        }}>
        Add to right
      </button>
      </div>
      
    </div>
  );
}

export default App;