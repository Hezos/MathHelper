import {useState} from 'react';
import NavMenu from './NavMenu';
import { Advertisement } from "./Advertisement";
import { DivisionCommon } from './DivisionCommon';


const pictures = ["../assets/Div1.png", "../assets/Div2.png", "../assets/Div3.png", "../assets/Div4.png",
  "../assets/Div4.png"
]

export function DivisionPage(){

  const [count, setCount] = useState(0);

  const handlePhaseJump = () => {
    setCount(count + 1);
    if(count > 4)
    {
      setCount(0);
    }
  }

  if(count === 4){
    return(
      <div>
      <NavMenu>
      </NavMenu>
        <div class="container">
            <div >
                <br></br>
                <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
            </div>
            <br></br>
            <p class="text-start h4" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
            <br></br>
            <p class="text-start h4" style={{fontFamily:"sans-serif"}}> 
                <u >
                    Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                </u>
             </p>
            <br></br>
        <div class="text-center">
        <img class="w-75 h-75"
        src={require("../assets/Div5.png")} alt="Image goes here." />
        </div>
        <div class="text-center">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}} style={{fontFamily:"sans-serif"}}>
          Next phase
        </button>
        <div style={{width:'5%'}}/>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }} style={{fontFamily:"sans-serif"}}>
          Restart
        </button>
          </div>
          </div>
        <DivisionCommon/>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
        </div>
        </div>
      );    
    }
    else if(count === 1)
    {
        return(
          <div>
          <NavMenu>
          </NavMenu>
          <div class="container">
              <div >
                  <br></br>
                  <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
              </div>
              <br></br>
              <p class="text-start h4" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
              <br></br>
              <p class="text-start h4" style={{fontFamily:"sans-serif"}}> 
                  <u >
                      Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                  </u>
               </p>
              <br></br>
          <div class="text-center">
          <img class="w-75 h-75"
            src={require("../assets/Div2.png")} alt="Image goes here." />
          </div>
            <div class="text-center">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}} style={{fontFamily:"sans-serif"}}>
          Next phase
        </button>
        <div style={{width:'5%'}}/>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }} style={{fontFamily:"sans-serif"}}>
          Restart
        </button>
          </div>
          </div>
        <DivisionCommon/>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
        </div>
          </div>
        );    
    }
    else if(count === 2)
      {
          return(
            <div>
              <NavMenu>
              </NavMenu>
            <div class="container">
                <div>
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}> 
                    <u >
                        Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                    </u>
                 </p>
                <br></br>
            <div class="text-center">
            <img class="w-75 h-75"
              src={require("../assets/Div3.png")} alt="Image goes here." />
            </div>
          <div class="text-center">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}} style={{fontFamily:"sans-serif"}}>
          Next phase
        </button>
          <div style={{width:'5%'}}/>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }} style={{fontFamily:"sans-serif"}}>
          Restart
        </button>
          </div>
          </div>
        <DivisionCommon/>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
       </div>
            </div>
          );    
      }
      else if(count === 3)
        {
            return(
              <div>
              <NavMenu>
              </NavMenu>
              <div class="container" >
                  <div>
                      <br></br>
                      <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                  </div>
                  <br></br>
                  <p class="text-start h4" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                  <br></br>
                  <p class="text-start h4" style={{fontFamily:"sans-serif"}} > 
                      <u >
                          Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                      </u>
                   </p>
                  <br></br>
              <div class="text-center">
              <img class="w-75 h-75"
                src={require("../assets/Div4.png")} alt="Image goes here." />
              </div>
          <div class="text-center">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}} style={{fontFamily:"sans-serif"}}>
          Next phase
        </button>
          <div style={{width:'5%'}}/>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }} style={{fontFamily:"sans-serif"}}>
          Restart
        </button>
          </div>
          </div>
        <DivisionCommon/>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/> 
       </div>
       </div>
            );    
        }
        else
        {
          return(
            <div>
              <NavMenu>
              </NavMenu>
            <div class="container">
                <div>
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}} > 
                    <u >
                        Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                    </u>
                 </p>
                <br></br>
            <div class="text-center">
            <img class="w-75 h-75"
              src={require("../assets/Div1.png")} alt="Image goes here." />
            </div>
          <div class="text-center">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}} style={{fontFamily:"sans-serif"}}>
          Next phase
        </button>
            <div style={{width:'5%'}}/>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }} style={{fontFamily:"sans-serif"}}>
          Restart
        </button>
          
            </div>
          </div>
          <DivisionCommon/>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
       </div>
      </div>
          );
        }
}

export default DivisionPage;