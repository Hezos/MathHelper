import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function SquarerootPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                  <br></br>
                     <p class="text-start h1 display-1 text-center"> Choosen topic: Squareroot </p>
                   </div>
                    <p>
                        It is recommended to review exponentiation and fractions first, before starting this topic.
                    </p>
                    <p>
                        Have you ever thought about what operation can negate the exponentiation?
                    </p>  
                    <div class="text-center">
                        <img class="w-50 h-50"  alt="Image goes here." />
                    </div>
                    <p>
                        Well, some people did.
                    </p>
                    <p>
                        Let's see the following: 2<sup>1</sup> the first power implies, that the answer is going to be 2.
                    </p>
                    <p>
                        After all we have a 2 once.
                    </p>
                    <p>
                        If we look closer, it's like that the 1 exponent wouldn't be over there.
                    </p>
                    <p>
                        Almost like there is no exponentiation.
                    </p>
                    <p>
                        So what about the 2<sup>2</sup>?
                    </p>
                    <p>
                        We have to find a way to make it 2<sup>1</sup>.
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50"  alt="Image goes here." />
                    </div>
                    <p>
                        That's where fractions come into play.
                    </p>
                    <p>
                        You see noone told you you can't put a fraction in to the explaination, so that's what we are going to do.
                    </p>
                    <p>
                        Gor example 2<sup>
                        <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span>
                        </sup>
                    </p>
                    <p>
                        Now if we use this <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> exponent, we can raise our original 2<sup>2</sup> to the <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> power.  
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50"  alt="Image goes here." />
                    </div>
                    <p>
                        Yet, it is but bear with me for a moment!
                    </p>
                    <p>
                        The following will look like this:
                    </p>
                    <p>
                        2<sup>2<sup><span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span></sup></sup> if we simplify we get 2<sup><span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>2</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span></sup>.
                    </p>
                    <p>
                        If we go further with the simplification we get 2<sup>1</sup>.
                    </p>
                    <p>
                        Which is exactly what we wanted.
                    </p>
                    <p>
                        Now this raise to the <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> type of logic has a special sign to it.
                    </p>
                    <p>
                        That sign is <span class="border border-1">&radic;</span>.
                    </p>
                    <p>
                        In the case of <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> it's <sup>2</sup>&radic;, but we usually don't write the 2, we just write &radic;
                    </p>
                    <p>
                        If we use a higher number than 2 we write the accompaning number.
                    </p>
                    <p>
                        For example for 3 it's &#8731;
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50"  alt="Image goes here." />
                    </div>
                    <p>
                        For simple numbers we are lucky, we can solve it easily.
                    </p>
                    <p>
                        <span >&radic;</span><span class="border-top border-1">9</span> = 3
                    </p>
                    <p>
                        How did I do that? Well I know that 3<sup>2</sup> = 3 &sdot; 3 = 9.
                    </p>
                    <p>
                        So if 9 = 3<sup>2</sup> doing a Squareroot with it will have the opposite effect, so they cancel each other and we get the original number, which was 3.
                    </p>
                    <div class="text-center">
                        <img class="w-50 h-50"  alt="Image goes here." />
                    </div>
                    <p>
                        Okay, for this kind of problems there are more ways to solve them.
                    </p>
                    <p>
                        I will use the long factoring method.
                    </p>
                    <p>
                        Which states, that we use primes for factoring out Multiplications.
                    </p>
                    <p>
                    &radic;<span class="border-top border-1">441</span> = &radic;<span class="border-top border-1">3 &sdot; 147</span> = &radic;<span class="border-top border-1">3 &sdot; 3 &sdot; 49</span> = &radic;<span class="border-top border-1">3 &sdot; 3 &sdot; 7 &sdot; 7</span>
                    </p>
                    <p>
                        If we see a number, more than twice we multiply with it to get the solution: 3  &sdot; 7 = 21.
                    </p>
                    <p>
                    &radic;<span class="border-top border-1">441</span> = 21
                    </p>
                    <p>
                        Now for something like &radic;<span class="border-top border-1">3</span>, to be honest I use a calculator.
                    </p>
                    <p>
                        These kind of problems go beyond that what I've learnt in Calculus classes.
                    </p>
                    <br></br>
                    <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>  
        </div>
    );
}

export default SquarerootPage();