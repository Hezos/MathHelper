import { Advertisement } from "./Advertisement";
import { NavMenu } from "./NavMenu";


export function MultiplicationPage(){

    return ( 
        <diy>
            <NavMenu>
            </NavMenu>
        <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
        <div class="border-bottom border-5 border-primary">
            <br></br>
             <p class="text-start h1 display-1 text-center"> Choosen topic: Multiplication </p>
        </div>
        <br></br>
        <p class="text-start h6 display-6">  It is recommended to review addition first before starting this topic. </p>
        <br></br>
        <p class="text-start h5 display-5" > 
            <u >
            Let's suppose you have to add six twos together like this:
            </u>
         </p>
        <br></br>
        <p class="text-center h4 display-4" style={{color:"green"}} > 2 + 2 + 2 + 2 + 2 + 2 = 12 </p>
        <div class="text-center">
        <img class="w-50 h-50 "
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult1.png")} alt="Image goes here." />
        </div>
        <p class="text-start h5 display-5">
            That's why multiplication was created for.
        </p>
        <br></br>
        <p class="text-start h6 display-6">
            We have a total of six twos, so to simplify the calculation above we can replace it with the following:
        </p>
        <br></br>
        <p class="text-center h4 display-4" style={{color:"green"}} > 6 &#8729; 2 = 12</p>
        <p class="text-start h6 display-6" style={{color:"green"}}> 
            6 <span style={{color:"lightgreen"}}>: We have six amount of twos </span>
        </p>
        <p class="text-start h6 display-6" style={{color:"green"}}>
            &#8729; <span style={{color:"lightgreen"}}> : The dot represents multiplication </span>
        </p>
        <p class="text-start h6 display-6" style={{color:"green"}}>
            2 <span style={{color:"lightgreen"}}> : representing the number we want to multiply </span>
        </p>
        <br></br>
        <p class="text-start h6 display-6">
            The operation reads six times two.
        </p>
        <div class="text-center">
         <img class="w-50 h-50 "
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult2.png")} alt="Image goes here." />
        </div>
        <br></br>
        <div class="border border-primary border-4 border-info">
            <p class="text-start h6 display-6 ">
                So the result of the two operations will be the same. They are equal to each other.
            </p >
        </div>
        <br></br>
        <p class="text-center h5 display-5" style={{color:"green"}}> 6 &#8729; 2 = 2 + 2 + 2 + 2 + 2 + 2 </p>
        <br></br>
        <p class="text-start h6 display-6">
            We can replace the original number if we want to calculate something else. For example three times five would look like this:
        </p>
        <p class="text-center h5 display-5" style={{color:"green"}} >3 &#8729; 5 = 15</p>
        <br></br>
        <p class="text-start h6 display-6">
            <u>
                Ofcourse different numbers means different result. Hence the the result is fifteen.
            </u> 
        </p>
        <br></br>
        <p class="text-start h6 display-6">
            Multiplication is commutative, so <span style={{color:"green"}}>  2 &#8729; 6 </span> is equal to <span style={{color:"green"}}> 6 &#8729; 2 </span>,
             the result of the calculations are both <span style={{color:"green"}}> 12</span>.
        </p>
        <div class="text-center">
        <img class="w-50 h-50"
         src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mul4.png")} alt="Image goes here." />
         <br></br>
        <img class="w-50 h-50 text-center"
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult3.png")} alt="Image goes here." />
        <br></br>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
        </div>
    </div>
    </diy>
    );
}

export default MultiplicationPage();