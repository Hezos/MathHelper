import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function SquarerootPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container">
                <div>
                  <br></br>
                     <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Squareroot </p>
                   </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        It is recommended to review exponentiation and fractions first, before starting this topic.
                    </p>
                    <br></br>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        Have you ever thought about what operation can negate the exponentiation?
                    </p>  
                    <div class="text-center">
                        <img class="w-50 h-50" src={require("../assets/Squareroot1.png")}  alt="Image goes here." />
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        Well, some people did.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        Let's see the following: 2<sup>1</sup> the first power implies, that the answer is going to be 2.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        After all we have a 2 once.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        If we look closer, it's like that the 1 exponent wouldn't be over there.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                        Almost like there is no exponentiation.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"prurple"}}>
                        So what about the 2<sup>2</sup>?
                    </p>
                    <br></br>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"brown"}}>
                        We have to find a way to make it 2<sup>1</sup>.
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50" src={require("../assets/Squareroot2.png")} alt="Image goes here." />
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"red"}}>
                        That's where fractions come into play.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        <u>
                        You see noone told you you can't put a fraction in to the explaination, so that's what we are going to do.
                        </u>
                    </p>
                    <br></br>
                    <p class="text-center h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        For example 2<sup><sup>1</sup>&frasl;<sub>2</sub>
                        </sup>
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        Now if we use this <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> exponent, we can raise our original 2<sup>2</sup> to the <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> power.  
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50" src={require("../assets/Squareroot3.png")} alt="Image goes here." />
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        Yes, it is but bear with me for a moment!
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        The following will look like this:
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"red"}}>
                    2<sup>2<sup><sup><sup>1</sup>&frasl;<sub>2</sub></sup></sup></sup>. if we simplify we get 2<sup><sup><sup>2</sup>&frasl;<sub>2</sub></sup></sup>.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        If we go further with the simplification we get <span style={{color:"green"}}> 2<sup>1</sup></span>.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                        Which is exactly what we wanted.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        Now this raise to the <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> type of logic has a special sign to it.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        That sign is <span class="border border-1">&radic;</span>.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                        In the case of <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> it's <sup>2</sup>&radic;, but we usually don't write the 2, we just write &radic;
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        If we use a higher number than 2 we write the accompaning number.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        <u>
                        For example for 3 it's &#8731;
                        </u>
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50" src={require("../assets/Squareroot4.png")} alt="Image goes here." />
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"red"}}>
                        For simple numbers we are lucky, we can solve it easily.
                    </p>
                    <br></br>
                    <p class="text-center h4" style={{fontFamily:"sans-serif", color:"red"}}>
                        <span >&radic;</span><span class="border-top border-1 border-danger">9</span> = 3
                    </p>
                    <br></br>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"red"}}>
                        How did I do that? Well I know that 3<sup>2</sup> = 3 &sdot; 3 = 9.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif", color:"red"}}>
                        So if 9 = 3<sup>2</sup> doing a Squareroot with it will have the opposite effect, so they cancel each other and we get the original number, which was 3.
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50" src={require("../assets/Squareroot5.png")} alt="Image goes here." />
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        Okay, for this kind of problems there are more ways to solve them.
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        I will use the long <u>factoring method.</u> 
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        <u>
                        Which states, that we use primes for factoring out Multiplications.
                        </u>
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    &radic;<span class="border-top border-1 border-dark">441</span> = &radic;<span class="border-top border-1 border-dark">3 &sdot; 147</span> = &radic;<span class="border-top border-1 border-dark">3 &sdot; 3 &sdot; 49</span> = &radic;<span class="border-top border-1 border-dark">3 &sdot; 3 &sdot; 7 &sdot; 7</span>
                    </p>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        If we see a number, more than twice we multiply with it to get the solution: 3  &sdot; 7 = 21.
                    </p>
                    <p class="text-center h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    &radic;<span class="border-top border-1 border-success">441</span> = 21
                    </p>
                    <br></br>
                    <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>  
        </div>
    );
}

export default SquarerootPage();