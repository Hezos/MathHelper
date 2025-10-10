import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function ExponentiationPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container">
                <div >
                    <br></br>
                    <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Exponentiation </p>
                </div>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                    It is recommended to review multiplication and variables first, before starting this topic.
                </p>
                <br></br>
                <p class="h4" style={{fontFamily:"sans-serif"}}>
                    <u>
                    Let's suppose you have the following multiplication:
                    </u>
                </p>
                <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                    2 &#8729; 2 &#8729; 2
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Exponent1.png")} alt="Image goes here." />
                </div>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"blue"}}>
                    Just like we did in addition we break it to multiple parts.
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                    <span style={{color:"red"}}>First</span>, 2 &#8729; 2 = 4 so we replace it.
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                    <span style={{color:"red"}}>Then</span> <span style={{color:"orange"}}>2 &#8729; 2</span> &#8729; 2 = <span style={{color:"orange"}}>4</span> &#8729; 2
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                <span style={{color:"red"}}>Finally</span> <span style={{color:"green"}}>4 &#8729; 2 = 8</span> so the answer is <span style={{color:"green"}}>8</span>.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Exponent2.png")} alt="Image goes here." />
                </div>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                    Yes, we will simplify multiplication now.
                </p>
                <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                    2 &#8729; 2 &#8729; 2 = <span style={{color:"green"}}> 2<sup>3</sup></span>
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif"}}>
                    The answer is still 8.
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"green"}}>
                    Let's look it closer:
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"green"}}>
                    2 : the base of exponentiation, the number we want to multiply
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"green"}}>
                    <sup>3</sup> : the exponent, the number of times we want to multiply the base with itself.
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"red"}}>
                    You may think this is useless, when I want to multiply thress a hundred times with each other, it is very confortable to write 3<sup>100</sup>,
                    then 3 &#8729; 3 &#8729; 3 &#8729; 3 &#8729;.... and so on 100 times.
                </p>
                <p class="h4 text-start" style={{fontFamily:"sans-serif", color:"red"}}>
                    Exponentiation appears in science a lot.
                </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default ExponentiationPage();