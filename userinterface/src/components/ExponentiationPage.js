import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function ExponentiationPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Addition </p>
                </div>
                <p>
                    It is recommended to review multiplication and variables first, before starting this topic.
                </p>
                <p>
                    Let's suppose you have the following multiplication:
                </p>
                <p>
                    2 &#8729; 2 &#8729; 2
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    Just like we did in addition we break it to multiple parts.
                </p>
                <p>
                    First, 2 &#8729; 2 = 4 so we replace it.
                </p>
                <p>
                    Then 2 &#8729; 2 &#8729; 2 = 4 &#8729; 2
                </p>
                <p>
                    Finally 4 &#8729; 2 = 8 so the answer is 8.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    Yes, we will simplify multiplication now.
                </p>
                <p>
                    2 &#8729; 2 &#8729; 2 = 2<sup>3</sup>
                </p>
                <p>
                    The answer is still 8.
                </p>
                <p>
                    Let's look it closer:
                </p>
                <p>
                    2 : the base of exponentiation, the number we want to multiply
                </p>
                <p>
                    <sup>3</sup> : the exponent, the number of times we want to multiply the base with itself.
                </p>
                <p>
                    You may think this is useless, when I want to multiply thress a hundred times with each other, it is very confortable to write 3<sup>100</sup>,
                    then 3 &#8729; 3 &#8729; 3 &#8729; 3 &#8729;.... and so on 100 times.
                </p>
                <p>
                    Exponentiation appears in science a lot.
                </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default ExponentiationPage();