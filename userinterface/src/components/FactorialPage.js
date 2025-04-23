import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function FactorialPage(){
    return(
         <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Factorials </p>
                </div>
                <p>
                    It is recommended to review multiplication first, before starting this topic.
                </p>
                <p>
                   We use factorials to determine how many different queues can we set up using a sőecified number of avaible candidates.
                </p>
                <p>
                    Let's look at the following problem:
                </p>
                <p>
                    How many different queues can I make if I have three different Tatus in a race?
                </p>
                <p>
                    Well, I can illustrate the situation with this drawing and the count.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    If we count them the answer is 6.
                </p>
                <p>
                    Now let's look at the following logic
                </p>
                <p>
                    When we used the first candidate for the first place, we only had two more candidates.
                </p>
                <p>
                    For the second place we can use two candidates.
                </p>
                <p>
                    If we take the second candidate to the second place, only one candidate will remain to the third place.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    Yes, but can we make more? Let's see!
                </p>
                <p>
                    For the first place I can put 3 candidates.
                </p>
                <p>
                    If I put one on the first place I can only put 2 to the second place.
                </p>
                <p>
                    Lastly I can only put the one remaining candidate to the last place.
                </p>
                <p>
                    If we multiply this number we get the 6.
                </p>
                <p>
                    3 &#8729; 2 &#8729; 1 = 6
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                 <p>
                    If you look closely going to the right each number is getting decreased by one, untill it gets to the number one.
                 </p>
                 <p>
                    So we start with the number of the candidates, then we multiply it with the decreased number
                 </p>
                 <p>
                    and we multiply with the decreased number's decreased number.
                 </p>
                 <p>
                    We do this until we reach 1.
                 </p>
                 <p>
                    Finally we calculate the result.
                 </p>
                 <p>
                    Ofcourse to shorten writing these numbers we introduce a new sign !.
                 </p>
                 <p>
                    This is called factorial.
                 </p>
                 <p>
                    So this 3! means the same as 3 &#8729; 2 &#8729; 1 = 6
                 </p>
                 <p>
                    Now let's look at the structure!
                 </p>
                 <p>
                    3!
                 </p>
                 <p>
                    3 : The starting number
                 </p>
                 <p>
                    ! : The sign of the factorial
                 </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
                </div>
        </div>
    );
}

export default FactorialPage();
