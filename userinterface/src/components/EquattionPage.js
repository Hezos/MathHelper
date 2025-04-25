import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";





export function EquationPage(){
    return(
        <div >
            <NavMenu/>
                <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                    <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Equations </p>
                 </div>
                  <p>
                   It is recommended to review variables first, before starting this topic.
                  </p>
                  <p>
                    Let's see the following problem.
                  </p>
                  <p>
                    X + 3 = 9
                  </p>
                  <p>
                    I will use a balance fot this example.
                  </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    Now X is a variable. How can we find it's value?
                </p>
                <p>
                    We solve the equation.
                </p>
                <p>
                    On the illustrated balance we have "weights", different color for X and different color for the other numbers.
                </p>
                <p>
                    Our goal is to have purely X on one side, and purely numbers on the other.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    What would this mean to our equation?
                </p>
                <p>
                    Well if we remove "weight" we can do it with substraction.
                </p>
                <p>
                    X + 3 - 3 = X
                </p>
                <p>
                    This will cause a shift for our balance.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    If we removed 3 from the left side, what will we have to do to restore the balance?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    Yes, so what's that exactly?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    Okay, let's see what that gives us.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50"  alt="Image goes here." />
                </div>
                <p>
                    9 - 3 = 6, so 6 goes to the right side.
                </p>
                <p>
                    we and up with: X = 6.
                </p>
                <p>
                    Formally it would look like this:
                </p>
                <p>
                    X + 3 = 9   / -3
                </p>
                <p>
                    X + 3 - 3 = 9 -3
                </p>
                <p>
                    X = 6
                </p>
                <p>
                    We mark operations with a / on the side.
                </p>
                <p>
                    Key takeaways:
                </p>
                <p>
                    We want one side to contain purely X.
                </p>
                <p>
                    We want the other side to contain a number.
                </p>
                <p>
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