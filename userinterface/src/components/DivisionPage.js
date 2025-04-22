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
                <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
            </div>
            <br></br>
            <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
            <br></br>
            <p class="text-start h5 display-5" > 
                <u >
                    Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                </u>
             </p>
            <br></br>
        <div class="text-center">
        <img class="w-75 h-75"
        src={require("../assets/Div5.png")} alt="Image goes here." />
        </div>
        <button class="btn btn-primary" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary" onClick={() => { setCount(0); }}>
          Restart
        </button>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p>
          First we have four, we didn't give away any. Using numbers: 4 - 0.
        </p>
        <p>
        Second we have three, we gave up one, but we started with four, again using numbers: 4 - 1.
        </p>
        <p>
        Third we have two, we gave up two, using numbers: 4 - 2.
        </p>
        <p>
        Next we have 1, we gave up three, using numbers: 4 - 3.
        </p>
        <p>
        Finally we gave up all four, again with numbers: 4 - 4.
        </p>
        <br></br>
        <p>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p>
          I only see one. So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p>
          4 : 4
        </p>
        <p>
          4 : The number we want to divide
        </p>
        <p>
          : : The sign of division
        </p>
        <p>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p>
          In our example we would write the expression like this:
        </p>
        <p>
          4 : 4 = 1
        </p>
        <p>
          This reads: four divided by four equals one.
        </p>
        <p>
          Let's look at an other example:
        </p>
        <p>
          15 : 3
        </p>
        <p>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p>
          Okay, we go further.
        </p>
        <p>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p>
          Five threes are required so our answer is 5.
        </p>
        <p>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p>
          You can ask yourself, which number I have to multiply three to get fiftenn?
        </p>
        <p>
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
                  <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
              </div>
              <br></br>
              <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
              <br></br>
              <p class="text-start h5 display-5" > 
                  <u >
                      Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                  </u>
               </p>
              <br></br>
          <div class="text-center">
          <img class="w-75 h-75"
            src={require("../assets/Div2.png")} alt="Image goes here." />
          </div>
          <button class="btn btn-primary" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary" onClick={() => { setCount(0); }}>
          Restart
        </button>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p>
          First we have four, we didn't give away any. Using numbers: 4 - 0.
        </p>
        <p>
        Second we have three, we gave up one, but we started with four, again using numbers: 4 - 1.
        </p>
        <p>
        Third we have two, we gave up two, using numbers: 4 - 2.
        </p>
        <p>
        Next we have 1, we gave up three, using numbers: 4 - 3.
        </p>
        <p>
        Finally we gave up all four, again with numbers: 4 - 4.
        </p>
        <br></br>
        <p>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p>
          I only see one. So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p>
          4 : 4
        </p>
        <p>
          4 : The number we want to divide
        </p>
        <p>
          : : The sign of division
        </p>
        <p>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p>
          In our example we would write the expression like this:
        </p>
        <p>
          4 : 4 = 1
        </p>
        <p>
          This reads: four divided by four equals one.
        </p>
        <p>
          Let's look at an other example:
        </p>
        <p>
          15 : 3
        </p>
        <p>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p>
          Okay, we go further.
        </p>
        <p>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p>
          Five threes are required so our answer is 5.
        </p>
        <p>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p>
          You can ask yourself, which number I have to multiply three to get fiftenn?
        </p>
        <p>
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
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h5 display-5" > 
                    <u >
                        Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                    </u>
                 </p>
                <br></br>
            <div class="text-center">
            <img class="w-75 h-75"
              src={require("../assets/Div3.png")} alt="Image goes here." />
            </div>
            <button class="btn btn-primary" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary" onClick={() => { setCount(0); }}>
          Restart
        </button>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p>
          First we have four, we didn't give away any. Using numbers: 4 - 0.
        </p>
        <p>
        Second we have three, we gave up one, but we started with four, again using numbers: 4 - 1.
        </p>
        <p>
        Third we have two, we gave up two, using numbers: 4 - 2.
        </p>
        <p>
        Next we have 1, we gave up three, using numbers: 4 - 3.
        </p>
        <p>
        Finally we gave up all four, again with numbers: 4 - 4.
        </p>
        <br></br>
        <p>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p>
          I only see one. So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p>
          4 : 4
        </p>
        <p>
          4 : The number we want to divide
        </p>
        <p>
          : : The sign of division
        </p>
        <p>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p>
          In our example we would write the expression like this:
        </p>
        <p>
          4 : 4 = 1
        </p>
        <p>
          This reads: four divided by four equals one.
        </p>
        <p>
          Let's look at an other example:
        </p>
        <p>
          15 : 3
        </p>
        <p>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p>
          Okay, we go further.
        </p>
        <p>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p>
          Five threes are required so our answer is 5.
        </p>
        <p>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p>
          You can ask yourself, which number I have to multiply three to get fiftenn?
        </p>
        <p>
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
                      <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
                  </div>
                  <br></br>
                  <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
                  <br></br>
                  <p class="text-start h5 display-5" > 
                      <u >
                          Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                      </u>
                   </p>
                  <br></br>
              <div class="text-center">
              <img class="w-75 h-75"
                src={require("../assets/Div4.png")} alt="Image goes here." />
              </div>
              <button class="btn btn-primary" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary" onClick={() => { setCount(0); }}>
          Restart
        </button>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p>
          First we have four, we didn't give away any. Using numbers: 4 - 0.
        </p>
        <p>
        Second we have three, we gave up one, but we started with four, again using numbers: 4 - 1.
        </p>
        <p>
        Third we have two, we gave up two, using numbers: 4 - 2.
        </p>
        <p>
        Next we have 1, we gave up three, using numbers: 4 - 3.
        </p>
        <p>
        Finally we gave up all four, again with numbers: 4 - 4.
        </p>
        <br></br>
        <p>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p>
          I only see one. So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p>
          4 : 4
        </p>
        <p>
          4 : The number we want to divide
        </p>
        <p>
          : : The sign of division
        </p>
        <p>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p>
          In our example we would write the expression like this:
        </p>
        <p>
          4 : 4 = 1
        </p>
        <p>
          This reads: four divided by four equals one.
        </p>
        <p>
          Let's look at an other example:
        </p>
        <p>
          15 : 3
        </p>
        <p>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p>
          Okay, we go further.
        </p>
        <p>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p>
          Five threes are required so our answer is 5.
        </p>
        <p>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p>
          You can ask yourself, which number I have to multiply three to get fiftenn?
        </p>
        <p>
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
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Division </p>
                </div>
                <br></br>
                <p class="text-start h6 display-6">  It is recommended to review substraction first before starting this topic. </p>
                <br></br>
                <p class="text-start h5 display-5" > 
                    <u >
                        Let's suppose you have to share these rectangles to four different person (People are marked with circles):
                    </u>
                 </p>
                <br></br>
            <div class="text-center">
            <img class="w-75 h-75"
              src={require("../assets/Div1.png")} alt="Image goes here." />
            </div>
        <button class="btn btn-primary" onClick={() => { handlePhaseJump();}}>
          Next phase
        </button>
        <button class="btn btn-primary" onClick={() => { setCount(0); }}>
          Restart
        </button>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl1.png')} alt='image goes here'/>
        </div>
        <p>
          That's the point! You successfully distributed, or we can say divided them to four people. Let's see the phases of the rectangles with numbers.
        </p>
        <p>
          First we have four, we didn't give away any. Using numbers: 4 - 0.
        </p>
        <p>
        Second we have three, we gave up one, but we started with four, again using numbers: 4 - 1.
        </p>
        <p>
        Third we have two, we gave up two, using numbers: 4 - 2.
        </p>
        <p>
        Next we have 1, we gave up three, using numbers: 4 - 3.
        </p>
        <p>
        Finally we gave up all four, again with numbers: 4 - 4.
        </p>
        <br></br>
        <p>
          The 4 - 4 = 0. In this case we always want to get zero (0).
        </p>
        <p>
          Let's look at our expression: 4 - 4 = 0
        </p>
        <br></br>
        <p>
          Our main question is how many fours we need to substract from four to get zero? Well, we can just count.
        </p>
        <br></br>
        <p>
          4 - <span class="border border-primary">4</span> = 0
        </p>
        <br></br>
        <p>
          I only see one. So four divided by four is 1. If you look closely, you can see each person got one rectangle.
        </p>
        <br></br>
        <p>
          Now the structure of the division is the following.
        </p>
        <br></br>
        <p>
          4 : 4
        </p>
        <p>
          4 : The number we want to divide
        </p>
        <p>
          : : The sign of division
        </p>
        <p>
          4 : The other four is the number we want to divide with
        </p>
        <br></br>
        <p>
          In our example we would write the expression like this:
        </p>
        <p>
          4 : 4 = 1
        </p>
        <p>
          This reads: four divided by four equals one.
        </p>
        <p>
          Let's look at an other example:
        </p>
        <p>
          15 : 3
        </p>
        <p>
          First we write fifteen, that's the number we want to divide.
        </p>
        <p>15</p>
        <p>
          Then we start substracting the threes, let's start with one three.
        </p>
        <p>
          15 - 3
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl2.png')}
             alt="Image goes here." />
          </div>
        <p>
          Okay, we go further.
        </p>
        <p>
            15 - 3 - 3 = 9 still not 0.
        </p>
        <p>
            15 - 3 - 3 - 3 = 6 not 0 again.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 = 3 not 0 yet.
        </p>
        <p>
            15 - 3 - 3 - 3 - 3 - 3 = 0 now we can calculate the threes.
        </p>
        <br></br>
        <p> 15 - <span class="border border-1"> 3 - 3 - 3 - 3 - 3 </span> = 0 </p>
        <p>
          Five threes are required so our answer is 5.
        </p>
        <p>
          15 : 3 = 5
        </p>
        <div class="text-center">
          <img class="w-75 h-75" src={require('../assets/DivEpl3.png')}
             alt="Image goes here." />
          </div>
        <p>
          Alrigth buddy, if you know multiplication you can use it backwards, since they are opposite operations.
        </p>
        <p>
          You can ask yourself, which number I have to multiply three to get fiftenn?
        </p>
        <p>
          If you remember 3 &#8729; 5 = 15, then you can guess that's five.
        </p> <br></br>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
       </div>
      </div>
          );
        }
}

export default DivisionPage;