import {useState} from 'react';
import NavMenu from './NavMenu';
import { Advertisement } from "./Advertisement";


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
        <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
            <div class="border-bottom border-5 border-primary">
                <br></br>
                <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
            </div>
            <br></br>
            <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
            <br></br>
            <p class="text-start h5 display-5" style={{fontFamily:"sans-serif"}}> 
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
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }}>
          Restart
        </button>
          </div>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>First</span> we have four, we didn't give away any. Using numbers: <span style={{color:"orange"}}>4 - 0</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Second</span> we have three, we gave up one, but we started with four, again using numbers: <span style={{color:"orange"}}>4 - 1</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Third</span> we have two, we gave up two, using numbers: <span style={{color:"orange"}}>4 - 2</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Next</span> we have 1, we gave up three, using numbers: <span style={{color:"orange"}}>4 - 3</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Finally</span> we gave up all four, again with numbers: <span style={{color:"orange"}}>4 - 4</span>.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          I only see <u style={{color:"red"}}> one. </u> So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : 4
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The number we want to divide
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          : : The sign of division
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          In our example we would write the expression like this:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          4 : 4 = 1
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          This reads: four divided by four equals one.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Let's look at an other example:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>15</p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Okay, we go further.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Five threes are required so our answer is 5.
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
          <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <u>
          You can ask yourself, which number I have to multiply three to get fifteen?
          </u>
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p>
        <br></br>
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
          <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
              <div class="border-bottom border-5 border-primary">
                  <br></br>
                  <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
              </div>
              <br></br>
              <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
              <br></br>
              <p class="text-start h5 display-5" style={{fontFamily:"sans-serif"}}> 
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
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }}>
          Restart
        </button>
          </div>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>First</span> we have four, we didn't give away any. Using numbers: <span style={{color:"orange"}}>4 - 0</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Second</span> we have three, we gave up one, but we started with four, again using numbers: <span style={{color:"orange"}}>4 - 1</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Third</span> we have two, we gave up two, using numbers: <span style={{color:"orange"}}>4 - 2</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Next</span> we have 1, we gave up three, using numbers: <span style={{color:"orange"}}>4 - 3</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Finally</span> we gave up all four, again with numbers: <span style={{color:"orange"}}>4 - 4</span>.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
        4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          I only see <u style={{color:"red"}}> one. </u> 
           So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : 4
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The number we want to divide
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          : : The sign of division
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          In our example we would write the expression like this:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          4 : 4 = 1
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          This reads: four divided by four equals one.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Let's look at an other example:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>15</p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Okay, we go further.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Five threes are required so our answer is 5.
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
          <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <u>
          You can ask yourself, which number I have to multiply three to get fifteen?
          </u>
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p>
        <br></br>
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
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h5 display-5" style={{fontFamily:"sans-serif"}}> 
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
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }}>
          Restart
        </button>
          </div>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>First</span> we have four, we didn't give away any. Using numbers: <span style={{color:"orange"}}>4 - 0</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Second</span> we have three, we gave up one, but we started with four, again using numbers: <span style={{color:"orange"}}>4 - 1</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Third</span> we have two, we gave up two, using numbers: <span style={{color:"orange"}}>4 - 2</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Next</span> we have 1, we gave up three, using numbers: <span style={{color:"orange"}}>4 - 3</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Finally</span> we gave up all four, again with numbers: <span style={{color:"orange"}}>4 - 4</span>.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          I only see <u style={{color:"red"}}> one. </u> So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : 4
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The number we want to divide
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          : : The sign of division
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          In our example we would write the expression like this:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          4 : 4 = 1
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          This reads: four divided by four equals one.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Let's look at an other example:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Okay, we go further.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Five threes are required so our answer is 5.
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <u>
          You can ask yourself, which number I have to multiply three to get fifteen?
          </u>
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p>
        <br></br>
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
              <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                  <div class="border-bottom border-5 border-primary">
                      <br></br>
                      <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                  </div>
                  <br></br>
                  <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                  <br></br>
                  <p class="text-start h5 display-5" style={{fontFamily:"sans-serif"}} > 
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
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }}>
          Restart
        </button>
          </div>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>First</span> we have four, we didn't give away any. Using numbers: <span style={{color:"orange"}}>4 - 0</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Second</span> we have three, we gave up one, but we started with four, again using numbers: <span style={{color:"orange"}}>4 - 1</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Third</span> we have two, we gave up two, using numbers: <span style={{color:"orange"}}>4 - 2</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Next</span> we have 1, we gave up three, using numbers: <span style={{color:"orange"}}>4 - 3</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Finally</span> we gave up all four, again with numbers: <span style={{color:"orange"}}>4 - 4</span>.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          I only see <u style={{color:"red"}}> one. </u> So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : 4
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The number we want to divide
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          : : The sign of division
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          In our example we would write the expression like this:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          4 : 4 = 1
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          This reads: four divided by four equals one.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Let's look at an other example:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>15</p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Okay, we go further.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Five threes are required so our answer is 5.
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
          <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <u>
          You can ask yourself, which number I have to multiply three to get fifteen?
          </u>
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p>
         <br></br>
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
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h5 display-5" style={{fontFamily:"sans-serif"}} > 
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
          <button class="btn btn-primary btn-lg" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary btn-lg" onClick={() => { setCount(0); }}>
          Restart
        </button>
          </div>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>First</span> we have four, we didn't give away any. Using numbers: <span style={{color:"orange"}}>4 - 0</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Second</span> we have three, we gave up one, but we started with four, again using numbers: <span style={{color:"orange"}}>4 - 1</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Third</span> we have two, we gave up two, using numbers: <span style={{color:"orange"}}>4 - 2</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Next</span> we have 1, we gave up three, using numbers: <span style={{color:"orange"}}>4 - 3</span>.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
        <span style={{color:"yellow"}}>Finally</span> we gave up all four, again with numbers: <span style={{color:"orange"}}>4 - 4</span>.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          I only see <u style={{color:"red"}}> one. </u> So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : 4
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The number we want to divide
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          : : The sign of division
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          In our example we would write the expression like this:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
          4 : 4 = 1
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          This reads: four divided by four equals one.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Let's look at an other example:
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>15</p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Okay, we go further.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          Five threes are required so our answer is 5.
        </p>
        <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
          <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          <u>
          You can ask yourself, which number I have to multiply three to get fifteen?
          </u>
        </p>
        <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p> 
        <br></br>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
       </div>
      </div>
          );
        }
}

export default DivisionPage;