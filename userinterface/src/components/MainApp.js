
export function MainComponent() {



    return (
        <div className="App">
         <h1>
          Learn math with my sidekick!
        </h1>
        <button onClick={()=>{
            //Show equations     
        }}>
          Equations
        </button>
        <button onClick={()=>{
            //Show shapes
        }}>
          Area, Volume calculations
        </button>
        <button onClick={()=>{
            //Show fractions
        }}>
          Calculate fractions
        </button>
      </div>
    );
    
}

export default MainComponent();
