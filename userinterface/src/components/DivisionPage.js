import {useState} from 'react';

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


export function DivisionPage(){

  const [count, setCount] = useState(0);

    return(
        <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
            <div class="border-bottom border-5 border-primary">
                <br></br>
                <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
            </div>
            <br></br>
            <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
            <br></br>
            <p class="text-start h5 display-5" > 
                <u >
                    Let's suppose you have to share these rectangles to four different person:
                </u>
             </p>
            <br></br>
            <button onClick={()=>{
          DisplayDivision();
        }}>
          Show division
        </button>
        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
            <canvas id="canvas" width={window.innerWidth} height={window.innerHeight*0.9} class="border border-2"></canvas>

        </div>
    );
}

export default DivisionPage;