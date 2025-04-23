import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";



export function SubstractionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Substraction </p>
                </div>
                <p>
                    It is recommended to review number line first, before starting this topic.
                </p>
                <p>
                    Let's see the following problem: 5 - 3, I will illustrate that on the number line.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
                </div>
                <p>
                    We start from 5 and we go left with 3 steps. We ended up on 2.
                </p>
                <p>
                    With numbers: 5 - 3 = 2
                </p>
                <p>
                    Let's see the following:
                </p>
                <p>
                    5 - 3
                </p>
                <p>
                    5 : The number which we want to decrease
                </p>
                <p>
                    - : the symbol of substraction
                </p>
                <p>
                    3 : The number we want to decrease with
                </p>
                <p>
                    Alongside with the result: 5 - 3 = 2.
                </p>
                <p>
                    The following reads five minus three equals two.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
                </div>
                <p>
                    Okay let's look at this one: 4 - 1 - 2
                </p>
                <p>
                    We can split this example int two parts.
                </p>
                <p>
                    We have two minus signs, that means we will go left twice.
                </p>
                <p>
                    The second time we go where the first one left off.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
                </div>
                <p>
                    Using the number line we can write the following:
                </p>
                <p>
                    If we look at 4 - 1 = 3, that tells us, that 4 - 1 is replacable with 3, that's what we are going to do.
                </p>
                <p>
                    4 - 1 - 2 = 3 - 2
                </p>
                <p>
                    And finally, 3 - 2 = 1, we got what the number line showed us.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
                </div>
                <p>
                    Alright let's see this: 8 - 2 - 1 = 3
                </p>
                <p>
                    Well we just substract more times like this:
                </p>
                <p>
                    <span>8 - 2</span> -1 -3 = 6 - 1 - 3
                </p>
                <p>
                    <span>6 - 1</span> -3 = 5 - 3
                </p>
                <p>
                    5 - 3 = 2
                </p>
                <p>
                    If you are familiar with addition you can substract the sum of these numbers.
                </p>
                <p>
                    2 + 1 + 3 = 6
                </p>
                <p>
                    8 - 6 = 2, We have the same result.
                </p>
                <p>
                    Why does this work?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    We make one big "jump" to the left instead of three small ones.
                </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>   
            </div>
        </div>
    );
}

export default SubstractionPage();