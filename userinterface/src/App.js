import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { MultiplicationPage } from './components/MultiplicationPage';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { DivisionPage } from './components/DivisionPage';
import NavMenu from './components/NavMenu';
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

function App() {


  const [showEquation, setShowEquation] = useState(false);

  const [showFractions, setShowFractions] = useState(false);

  const [showShapes, setShowShapes] = useState(false);

  const [showMultiplication, setShowMultiplication] = useState(false);

  const [showDivision, setShowDivision] = useState(false);


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
      <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <button class="btn info" >
              Topics
            </button>
            <Offcanvas  >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Learn math with my sidekick!
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body class="container">
              <div>
                <div>
                <button class="btn info" onClick={()=>{
                         
                  }}>
                    Equations
                  </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    }}>
                      Area, Volume calculations
                    </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    setShowFractions(true);
                    }}>
                      Calculate fractions
                    </button>
                </div>
                <div>
                  <button class="btn info" onClick={()=>{
                    setShowMultiplication(true);
                    }}>
                      Multiplication
                    </button>
                </div>
                 <div>
                  <button class="btn info" onClick={()=>{
                    }}>
                      Division
                    </button>
                </div>
              </div>
            </Offcanvas.Body>
             </Offcanvas>         
        </div>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="btn info" href="http://localhost:3000" >
                Home
              </a>
            </li>
          </ul>
          <div class="text-end w-100">
            <a class="btn info" href="http://localhost:3000">YouTube</a>
          </div>
          </div>
        </nav>
        <div class="text-center">
        <MultiplicationPage/>
        </div>
      </div>
    );
  }
  else if(showDivision)
  {
    return (
      <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <button class="btn info"  >
              Topics
            </button>
            <Offcanvas >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Learn math with my sidekick!
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body class="container">
              <div>
                <div>
                <button class="btn info" onClick={()=>{
                    setShowEquation(true);     
                  }}>
                    Equations
                  </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    setShowShapes(true);
                    }}>
                      Area, Volume calculations
                    </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    setShowFractions(true);
                    }}>
                      Calculate fractions
                    </button>
                </div>
                <div>
                  <button class="btn info" onClick={()=>{
                    setShowMultiplication(true);
                    }}>
                      Multiplication
                    </button>
                </div>
                <div>
                  <button class="btn info" onClick={()=>{
                    
                    setShowDivision(true);
                    }}>
                      Division
                    </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>         
        </div>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="btn info" href="http://localhost:3000" >
                Home
              </a>
            </li>
          </ul>
          <div class="text-end w-100">
            <a class="btn info" href="http://localhost:3000">YouTube</a>
          </div>
          </div>
        </nav>
        <DivisionPage/>   
       </div> 
    );
  }
  else
  {
    return (      
      <div >
        <NavMenu>
        </NavMenu>
        <div>
          <p class="text-center h1 display-1">Learn math with my sidekick!</p>
          <div class="text-center">
         <img class="w-50 h-50"
        src ={require("../src/assets/Welcome.png")} 
         alt="Image goes here, from file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/assets/Welcome.png" />
        </div>
        <table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th colSpan={8} class="text-center" scope="row">Table of contents</th>
      </tr>
  </thead>
  <tbody>
    <tr>
    < td colSpan={8} class="text-center" scope="row">
        <button class="btn info">
          Number line
        </button> 
      </td>
    </tr>
    <tr>
    <td colSpan={3} class="text-center" >
       <button class="btn info">
        Addition
      </button> 
      </td>
      <td colSpan={8} class="text-center" >
        <button class="btn info"> 
        Substraction
        </button>
        </td>
    </tr>
    <tr>
      <td colSpan={3} class="text-center" scope="row">
      <a class="btn info" href='/Multiplication'>
        Multiplication 
        </a>
      </td>
      <td colSpan={8} class="text-center" scope="row">
        <a class="btn info" href='/Division'> 
          Division
        </a>
       </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">  Variables </td>
    </tr>
    <tr>
      <td colSpan={1} class="text-center" scope="row"> Exponentiation </td>
      <td colSpan={2} class="text-center" scope="row"> Factorials </td>
      <td colSpan={5} class="text-center " scope="row"> Fractions </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">  Squareroot </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">  Equations </td>
    </tr>
    <tr>
    <td  rowSpan={2} class="text-center align-middle"> Area calculation </td>
      <td colSpan={3} class="text-center ">  Series </td>
      <td  colSpan={8} rowSpan={3} class="text-center align-middle" > Percentage  </td>
    </tr>
    <tr>
      <td  colSpan={3} class="text-center" > Sine, Cosine </td>
    </tr>
    <tr>
      <td  colSpan={4} class="text-center ">  Surface and volume calculations </td>
    </tr>
    <tr>
      <td colSpan={5} class="text-center "> Coordinate system </td>
    </tr>
    <tr>
      <td colSpan={5} class="text-center "> Charts </td>
    </tr>
    <tr>
      <td colSpan={5} class="text-center "> Functions </td>
    </tr>
    <tr>
      <td colSpan={5} class="text-center "> Logarithms </td>
    </tr>

  </tbody>
</table>
        </div>
      </div>
    );
  }
}

export default App;