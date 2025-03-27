import './App.css';
import {useEffect, useState} from 'react'


//const [data, setData] = useState();

var data = {
  meta: 'This is metadata',
  xPos:10
};

function frame(){
  setInterval(() =>{
    data.xPos += 10;
    console.log('Moving object');
  },10);
}

function App() {
  
  frame();


  return (
    <div className="App">
      <h1>
        Learn math with my sidekick!
      </h1>
      <p>
        {data.meta}
      </p>
      <svg width="400" height="120">
        <rect x={data.xPos.toString()} y={data.xPos.toString()} width={data.xPos.toString()}
         height="100" stroke="red" strokeWidth="6" fill="blue" />
      </svg>
    </div>
  );
}

export default App;
