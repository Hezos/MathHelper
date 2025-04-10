import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { MultiplicationPage } from './components/MultiplicationPage';
//import { MainComponent } from './components/MainApp';
//import { motion } from 'framer-motion';


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

//If there wasn't any reset it continues rotating over and over again. stance is for the left or right position
function DrawRotated(degree, posX, posY, width, height, stance){
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
  if(stance === "left"){
    ctx.fillRect(posX-width/2-width/12 - (width/2- width/2*Math.cos(degree)) + width, posY-height*3.5 + width/2* Math.sin(degree), width/6, height);
  }
  ctx.fillRect(posX-width/2+width-width/12 + (width/2- width/2*Math.cos(degree)) - width, posY-height*2.5 - width/2* Math.sin(degree), width/6, height);

  if(stance === "right"){
    ctx.fillRect(posX-width/2+width-width/12 + (width/2- width/2*Math.cos(degree)) - width, posY-height*3.5 - width/2* Math.sin(degree), width/6, height);
  }
  ctx.fillStyle = "gray";
  if(stance === "left"){
    ctx.fillRect(posX-width/2-width/12 - (width/2- width/2*Math.cos(degree)) + width, posY-height*2.5 + width/2* Math.sin(degree), width/6, height);

  }
  if(stance === "right"){
    ctx.fillRect(posX-width/2-width/12 - (width/2- width/2*Math.cos(degree)) + width, posY-height*2.5 + width/2* Math.sin(degree), width/6, height);
  }

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

function DrawSolved(posX, posY, width, height){
  //It has a + on the left side (x + something)
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.reset();
  //drawing the rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(posX-width/2, posY-height/2, width, height);

  ctx.fillStyle = "purple";
  
  ctx.fillRect(posX-width/2+width-width/12, posY-height*2.5, width/6, height);
  ctx.fillStyle = "gray";
  ctx.fillRect(posX-width/2-width/12, posY-height*2.5, width/6, height);
  
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

function DisplayFractions(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.reset();
  ctx.fillStyle = "blue";
  ctx.fillRect(100,100,100,100);
  ctx.fillStyle = "purple";
  ctx.fillRect(100,200,100,100);
  ctx.fillRect(200,100,100,100);
  ctx.fillRect(200,200,100,100);
  
  ctx.lineWidth = 10;
  ctx.strokeStyle = "white";
  ctx.strokeRect(100,100,100,100);
  ctx.strokeRect(100,100,200,200);
  ctx.strokeRect(200,200,100,100);

  ctx.fillStyle = "purple";
  ctx.fillRect(400,200,100,100);

  ctx.fillStyle = "blue";
  ctx.fillRect(500,100,100,100);

  ctx.fillRect(400,100,100,100);
  ctx.fillRect(500,200,100,100);
  
  ctx.lineWidth = 10;
  ctx.strokeRect(400,100,100,100);
  ctx.strokeRect(400,100,200,200);
  ctx.strokeRect(500,200,100,100);

  ctx.strokeStyle = "white";

  ctx.fillStyle = "purple";
  ctx.fillRect(700,100,200,200);
  ctx.fillRect(700,167,200,200/3);
  ctx.strokeRect(700,100,200,200);
  ctx.strokeRect(700,167,200,200/3);

  ctx.strokeStyle = "gray";
  ctx.strokeRect(700,267,200,200/6);
  ctx.fillStyle = "blue";
  ctx.fillRect(705,272,200-10,200/6-10);


  ctx.fillStyle = "purple";
  ctx.fillRect(1000,100,200,200);
  ctx.fillRect(1000,167,200,200/3);
  ctx.strokeRect(1000,100,200,200);
  ctx.strokeRect(1000,167,200,200/3);


  ctx.fillStyle = "purple";
  ctx.fillRect(1300, 100, 200, 200);
  ctx.fillStyle = "blue";
  ctx.fillRect(1300, 100+2*200/3, 200, 200/3);
  ctx.strokeStyle = "white";
  ctx.strokeRect(1000,100,200,200);
  ctx.strokeRect(1000,100+200/6,200,200/6);
  ctx.strokeRect(1000,100+200/3,200,200/6);
  ctx.strokeRect(1000,100+200/2,200,200/6);
  ctx.strokeRect(1000,100+200/6*4,200,200/6);
  ctx.fillRect(1005,272,200-10,200/6-10);

  ctx.strokeRect(1300,100,200,200);
  ctx.strokeRect(1300,100,200,200/3);
  ctx.strokeRect(1300,100,200,200/3*2);

  ctx.fillStyle = "purple";
  ctx.fillRect(1600, 100, 200, 200);
  ctx.fillStyle = "blue";
  ctx.fillRect(1600, 100+2*200/3, 200, 200/3);
  ctx.strokeRect(1600,100,200,200);
  ctx.strokeRect(1600,100,200,200/3);
  ctx.strokeRect(1600,100,200,200/3*2);

  ctx.fillRect(100, 400, 800, 50);  
  ctx.strokeRect(100,400,800,50);
  ctx.strokeRect(100, 400, 100, 50);
  ctx.strokeRect(100, 400, 200, 50);
  ctx.strokeRect(100, 400, 300, 50);
  ctx.strokeRect(100, 400, 400, 50);
  ctx.strokeRect(100, 400, 500, 50);
  ctx.strokeRect(100, 400, 600, 50);
  ctx.strokeRect(100, 400, 700, 50);


  //Division make it show sharing process
  ctx.fillRect(1000, 400, 100, 50);
  ctx.fillRect(1000, 450, 100, 50);
  ctx.fillRect(1150, 400, 100, 50);
  ctx.fillRect(1150, 450, 100, 50);
  ctx.fillRect(1300, 400, 100, 50);
  ctx.fillRect(1300, 450, 100, 50);
  ctx.fillRect(1450, 400, 100, 50);
  ctx.fillRect(1450, 450, 100, 50);
  ctx.fillRect(1600, 400, 100, 50);
  ctx.fillRect(1600, 450, 100, 50);
  ctx.fillRect(1750, 400, 100, 50);
  ctx.fillRect(1750, 450, 100, 50);
  ctx.fillRect(1000, 600, 100, 50);
  ctx.fillRect(1000, 650, 100, 50);
  ctx.fillRect(1150, 600,100,50);
  //ctx.fillRect(1150, 650,100,50);

  ctx.strokeRect(1000, 400, 100, 50);
  ctx.strokeRect(1000, 450, 100, 50);
  ctx.strokeRect(1150, 400, 100, 50);
  ctx.strokeRect(1150, 450, 100, 50);
  ctx.strokeRect(1300, 400, 100, 50);
  ctx.strokeRect(1300, 450, 100, 50);
  ctx.strokeRect(1450, 400, 100, 50);
  ctx.strokeRect(1450, 450, 100, 50);
  ctx.strokeRect(1600, 400, 100, 50);
  ctx.strokeRect(1600, 450, 100, 50);
  ctx.strokeRect(1750, 400, 100, 50);
  ctx.strokeRect(1750, 450, 100, 50);
  ctx.strokeRect(1000, 600, 100, 50);
  ctx.strokeRect(1000, 650, 100, 50);
  ctx.strokeRect(1150, 600,100,50);
  //ctx.strokeRect(1150, 650,100,50);

}

function ShowDivisionFractured(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.reset();
  ctx.strokeStyle = "white";

  ctx.fillStyle = "blue";
  
  
  ctx.fillRect(100,100, 1000, 50);
  


  ctx.lineWidth = 10;
  ctx.strokeStyle = "white";
  ctx.strokeRect(100,100, 1000, 50);


  ctx.fillRect(100,200, 250, 50);
  ctx.fillRect(100,300, 250, 50);
  ctx.fillRect(100,500, 250, 50);
  ctx.fillRect(100,400, 250, 50);

  //Divide it with 4 first, than 5
  //if statement before showing the divided form.
  ctx.strokeRect(100,100, 100, 50);
  ctx.strokeRect(100,100, 300, 50);
  ctx.strokeRect(100,100,200,50);
  ctx.strokeRect(100,100,400,50);
  ctx.strokeRect(100,100,500,50);
  ctx.strokeRect(100,100,600,50);
  ctx.strokeRect(100,100,700,50);
  ctx.strokeRect(100,100,800,50);
  ctx.strokeRect(100,100,900,50);

  //Fill colors here
  ctx.fillRect(100,200, 100, 50);
  ctx.fillRect(100,200, 200, 50);
  ctx.fillRect(100,300, 100, 50);
  ctx.fillRect(100,300, 200, 50);
  ctx.fillRect(100,500, 100, 50);
  ctx.fillRect(100,500, 200, 50);
  ctx.fillRect(100,400, 100, 50);
  ctx.fillRect(100,400, 200, 50);

  ctx.strokeRect(100,200, 100, 50);
  ctx.strokeRect(100,200, 200, 50);
  ctx.strokeRect(100,300, 100, 50);
  ctx.strokeRect(100,300, 200, 50);
  ctx.strokeRect(100,500, 100, 50);
  ctx.strokeRect(100,500, 200, 50);
  ctx.strokeRect(100,400, 100, 50);
  ctx.strokeRect(100,400, 200, 50);

  //Add the remaining pieces later.

  ctx.strokeRect(100,200, 250, 50);
  ctx.strokeRect(100,300, 250, 50);
  ctx.strokeRect(100,500, 250, 50);
  ctx.strokeRect(100,400, 250, 50);

  ctx.fillRect(700,200,200,50);

  ctx.fillRect(700,300, 50, 50);
  ctx.fillRect(780,300, 50, 50);
  ctx.fillRect(860,300, 50, 50);
  ctx.fillRect(940,300, 50, 50);


  ctx.strokeRect(700,300, 50, 50);
  ctx.strokeRect(780,300, 50, 50);
  ctx.strokeRect(860,300, 50, 50);
  ctx.strokeRect(940,300, 50, 50);


  ctx.strokeRect(700,200, 100, 50);
  ctx.strokeRect(700,200, 200, 50);
  ctx.strokeRect(700,200, 50, 50);
  ctx.strokeRect(700,200, 150, 50);


}

function DisplayDivision(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.reset();
  ctx.fillStyle = "blue";
  ctx.fillRect(300,200,100,100);
  ctx.fillRect(100,200,100,100);
  ctx.fillRect(400,200,100,100);
  ctx.fillRect(200,200,100,100);
  
  ctx.lineWidth = 10;
  ctx.strokeStyle = "white";
  ctx.strokeRect(300,200,100,100);
  ctx.strokeRect(100,200,100,100);
  ctx.strokeRect(400,200,100,100);
  ctx.strokeRect(200,200,100,100);

  ctx.font = "50px Arial";
  ctx.fillText("1",150,150);
  ctx.fillText("2",250,150);
  ctx.fillText("3",350,150);
  ctx.fillText("4",450,150);

  ctx.beginPath();
  ctx.moveTo(520,230);
  ctx.lineTo(800,230);
  ctx.lineTo(800,200);
  ctx.lineTo(830,240);
  ctx.lineTo(800,280);
  ctx.lineTo(800,250);
  ctx.lineTo(520,250);
  ctx.lineTo(520,225);
  ctx.fill();

  ctx.strokeStyle = "blue";
  ctx.stroke();

  ctx.fillRect(900,200,100,100);
  ctx.fillRect(1050,200,100,100);
  ctx.fillRect(1200,200,100,100);
  ctx.fillRect(1350,200,100,100);

  ctx.strokeStyle = "white";
  ctx.strokeRect(900,200,100,100);
  ctx.strokeRect(1050,200,100,100);
  ctx.strokeRect(1200,200,100,100);
  ctx.strokeRect(1350,200,100,100);

  ctx.fillStyle = "green";
  const circle = new Path2D();
  circle.arc(950, 400, 50, 0, 2 * Math.PI);
  circle.arc(1100, 400, 50, 0, 2 * Math.PI);
  circle.arc(1250, 400, 50, 0, 2 * Math.PI);
  circle.arc(1400, 400, 50, 0, 2 * Math.PI);
  ctx.fill(circle);

  ctx.fillStyle = "white";
  ctx.fillText("P1",925,415);
  ctx.fillText("P2",1075,415);
  ctx.fillText("P3",1225,415);
  ctx.fillText("P4",1375,415);

}

function App() {


  const [showEquation, setShowEquation] = useState(false);

  const [showFractions, setShowFractions] = useState(false);

  const [showShapes, setShowShapes] = useState(false);

  const [showMultiplication, setShowMultiplication] = useState(false);


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

  if(showEquation)
  {
    return (
      <div className="App" >
        <h1>
          Learn math with my sidekick!
        </h1>
      <button onClick={()=>{
        setShowEquation(true);
      }}>
        Equations
      </button>
      <button>
        Area, Volume calculations
      </button>
        <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>
        <div >
          <button onClick={() => {
              DrawRotated(-60, window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40, "left");  
            }}>
            Add to left
          </button>
          <button onClick={()=>{
            DrawBasic(window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40);
          }}>
            Restart balance
          </button>
          <button onClick={() => {
            DrawRotated(60, window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40, "right");  
            }}>
            Add to right
          </button>
          <button onClick={() => {
              DrawSolved(window.innerWidth / 2,window.innerHeight*0.9/2, window.innerWidth/5,window.innerHeight/40);
            }}>
            Show solution
          </button>
        </div>      
      </div>
    );
  }
  else if(showShapes)
  {
    return (
      <div className="App" >
      <h1>
        Learn math with my sidekick!
      </h1>
      <button onClick={()=>{
        setShowEquation(true);
      }}>
        Equations
      </button>
      <button>
        Area, Volume calculations
      </button>
      <button onClick={()=>{
        setShowFractions(true);
      }}>
        Calculating fractions
      </button>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>
      </div>
    );
  
  }
  else if(showFractions)
  {
    return (
        <div className="App" >
        <h1>
          Learn math with my sidekick!
        </h1>
        <button onClick={()=>{
          setShowEquation(true);
        }}>
          Equations
        </button>
        <button onClick={()=>{
          setShowShapes(true);
        }}>
          Area, Volume calculations
        </button>
        <button onClick={()=>{
          setShowFractions(true);
        }}>
          Calculate fractions
        </button>
        <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>
        <button onClick={()=>{
          DisplayFractions();
        }}>
          Show fractions
        </button>
        <button onClick={()=>{
          DisplayDivision();
        }}>
          Show division
        </button>
        <button onClick={()=>{
          ShowDivisionFractured()
        }}>
          Show fractured division
        </button>
      </div>
    );
  }
  else if(showMultiplication)
  {
    return (
      <div className="App">
        <h1>
          Learn math with my sidekick!
        </h1>
        <button onClick={()=>{
          setShowEquation(true);     
        }}>
          Equations
        </button>
        <button onClick={()=>{
          setShowShapes(true);
        }}>
          Area, Volume calculations
        </button>
        <button onClick={()=>{
          setShowFractions(true);
        }}>
          Calculate fractions
        </button>
        <button onClick={()=>{
            setShowMultiplication(true);
        }}>
          Multiplication
        </button>
        <MultiplicationPage/>
      </div>
    );
  }
  else
  {
    return (
        <div className="App">
         <h1>
          Learn math with my sidekick!
        </h1>
        <button onClick={()=>{
            setShowEquation(true);     
        }}>
          Equations
        </button>
        <button onClick={()=>{
            setShowShapes(true);
        }}>
          Area, Volume calculations
        </button>
        <button onClick={()=>{
            setShowFractions(true);
        }}>
          Calculate fractions
        </button>
        <button onClick={()=>{
            setShowMultiplication(true);
        }}>
          Multiplication
        </button>
      </div>
    );
  }
  
}

export default App;