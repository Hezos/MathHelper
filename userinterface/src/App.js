import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import NavMenu from './components/NavMenu';
//import { motion } from 'framer-motion';


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


  const [showShapes, setShowShapes] = useState(false);



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


  if(showShapes)
  {
    return (
      <div className="App" >
      <h1>
        Learn math with my sidekick!
      </h1>
      <button onClick={()=>{
        setShowShapes(true);
      }}>
        Equations
      </button>
      <button>
        Area, Volume calculations
      </button>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>
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
        <a href='/Numberline'>
          Number line
        </a> 
      </td>
    </tr>
    <tr>
    <td colSpan={2} class="text-center" >
       <a href='/Addition'>
        Addition
      </a> 
      </td>
      <td colSpan={8} class="text-center" >
        <a href='/Substraction'> 
        Substraction
        </a>
        </td>
    </tr>
    <tr>
      <td colSpan={2} class="text-center" scope="row">
      <a href='/Multiplication'>
        Multiplication 
        </a>
      </td>
      <td colSpan={8} class="text-center" scope="row">
        <a href='/Division'> 
          Division
        </a>
       </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">  
        <a href='/Variable'>
          Variables
        </a>
      </td>
    </tr>
    <tr>
      <td  class="text-center" style={{width:"33%"}}>
        <a href='/Exponentiation' >
          Exponentiation
        </a>
      </td>
      <td colSpan={2} class="text-center" style={{width:"33%"}} >
        <a href='/Factorial'>
          Factorials 
        </a>
      </td>
      <td colSpan={3} class="text-center " style={{width:"33%"}}> 
         <a href='/Fraction'>
            Fractions
          </a> 
         </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">
        <a href='/Squareroot'>
          Squareroot
        </a> 
      </td>
    </tr>
    <tr>
      <td colSpan={8} class="text-center ">  
        <a href='/Equations'>
          Equations
        </a>  
       </td>
    </tr>
    <tr>
    <td  class="text-center align-middle" style={{width:"33%"}}>
      <a href='/Areacalculation'>
        Area calculation
      </a> 
    </td>
      <td colSpan={2} rowSpan={2} class="text-center align-middle" style={{width:"33%"}}>
        <a href='/Series'>
          Series
        </a>
      </td>
      <td  colSpan={4} rowSpan={2} class="text-center align-middle" style={{width:"33%"}} >
        <a href='/Percentage'>
          Percentage
        </a>
      </td>
    </tr>
    <tr>
      <td  colSpan={0} class="text-center " style={{width:"33%"}}>  
        <a href='/Surfacevolumecalculations'>
          Surface and volume calculations
        </a>  
       </td>
    </tr>
    <tr>
      <td colSpan={6} class="text-center ">
        <a href='/Coordinatesystem'>
          Coordinate system
        </a> 
       </td>
    </tr>
    <tr>
      <td colSpan={6} class="text-center "> 
       <a href='/Charts'>
        Charts
       </a>
       </td>
    </tr>
    <tr>
      <td colSpan={6} class="text-center ">
        <a href='/Functions'>
          Functions
        </a>
       </td>
    </tr>
    <tr>
      <td  colSpan={6} class="text-center" >
        <a href='/SineCosine'>
          Sine, Cosine
        </a> 
      </td>
    </tr>
    <tr>
      <td colSpan={6} class="text-center "> 
        <a href='/Logarithms'>
          Logarithms
        </a>
      </td>
    </tr>

  </tbody>
</table>
        </div>
      </div>
    );
  }
}

export default App;