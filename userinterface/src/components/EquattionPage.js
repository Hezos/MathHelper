import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";





export function EquationPage(){
    return(
        <div >
            <NavMenu/>
                <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                    <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Equations </p>
                 </div>
                 <br></br>
                  <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                   It is recommended to review variables first, before starting this topic.
                  </p>
                  <br></br>
                  <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                    Let's see the following problem.
                    </u>
                  </p>
                  <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
                    X + 3 = 9
                  </p>
                  <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    I will use a balance fot this example.
                  </p>
                  <br></br>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equation1.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    Now X is a variable. How can we find it's value?
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    We solve the equation. I know, shocking.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    On the illustrated balance we have "weights", different color for X and different color for the other numbers.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    Our goal is to have purely X on one side, and purely numbers on the other.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equations2.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    What would this mean to our equation?
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    Well if we <u>remove</u> "weight" we can do it with substraction.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    X + 3 - 3 = X
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    This will cause a shift for our balance.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equation3.png")} alt="Image goes here." />
                </div>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    If we removed 3 from the left side, what will we have to do to restore the balance?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equations4.png")} alt="Image goes here." />
                </div>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    Yes, so what's that exactly?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equations5.png")} alt="Image goes here." />
                </div>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    Okay, let's see what that gives us.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Equation6.png")}  alt="Image goes here." />
                </div>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    9 - 3 = 6, so 6 goes to the right side.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    we end up with: X = 6.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                    Formally it would look like this:
                    </u>
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
                    X + <span style={{color:"orange"}}>3</span> = 9   / -3
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
                    X + 3 - 3 = 9 -3
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    X = 6
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    We mark operations with a <span style={{fontWeight:"bold"}}>/</span>  on the side.
                </p>
                <br></br>
                <p class="text-start h5 display-5" style={{fontFamily:"sans-serif", color:"red"}}>
                    Key takeaways:
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"red"}}>
                    We want one side to contain purely X.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"red"}}>
                    We want the other side to contain a number.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"red"}}>
                    We do the same operation on both sides every time.
                </p>
                 <br></br>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
              <Advertisement/>
             </div>  
      </div>
  
    );
}

export default EquationPage();