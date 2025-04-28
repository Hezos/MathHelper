import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function FactorialPage(){
    return(
         <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Factorials </p>
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    It is recommended to review multiplication first, before starting this topic.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        We use factorials to determine how many different queues can we set up using a specified number of avaible candidates.
                    </u>
                </p>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    Let's look at the following problem:
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    How many different queues can I make if I have three different Tatus in a race?
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    Well, I can illustrate the situation with this drawing and the count.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Factorial1.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    If we count them the answer is 6.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Now let's look at the following logic:
                    </u>
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    When we used the first candidate for the first place, we only had two more candidates.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    For the second place we can use two candidates.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    If we take the second candidate to the second place, only one candidate will remain to the third place.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Factorials2.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    Yes, but can we make more? Let's see!
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    For the first place I can put 3 candidates.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    If I put one on the first place I can only put 2 to the second place.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    Lastly I can only put the one remaining candidate to the last place.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    If we multiply this number we get the 6.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    3 &#8729; 2 &#8729; 1 = 6
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Factorials3.png")} alt="Image goes here." />
                </div>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"orange"}}>
                    If you look closely going to the right each number is getting decreased by one, untill it gets to the number <u>one.</u>
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"orange"}}>
                    So we start with the number of the candidates, then we multiply it with the decreased number
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"orange"}}>
                    and we multiply with the decreased number's decreased number.
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"orange"}}>
                    We do this until we reach 1.
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"orange"}}>
                    Finally we calculate the result.
                 </p>
                 <br></br>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Ofcourse to shorten writing these numbers we introduce a new sign !.
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    This is called factorial.
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    So this <span style={{color:"orange"}}>3!</span> means the same as 3 &#8729; 2 &#8729; 1 = 6
                 </p>
                 <br></br>
                 <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    Now let's look at the structure!
                 </p>
                 <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    3!
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    3 : The starting number
                 </p>
                 <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    ! : The sign of the factorial
                 </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
                </div>
        </div>
    );
}

export default FactorialPage();
