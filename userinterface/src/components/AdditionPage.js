import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";





export function AdditionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container" >
                <div >
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Addition </p>
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    It is recommended to review number line first, before starting this topic.
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    If you remember when we learnt the number line, if we went further on the right side we've got higher and higher numbers.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Now addition shows how many steps we take to the right, for example:
                    </u>
                </p>
                <br></br>
                    <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                        If I write 1 + 1, that means I go to 1 and I go right 1 time.
                    </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition1.png")}  alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    We end up on 2, that means I increased 1 with 1, it went 1 higher.
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    So we can say <span style={{color:"green"}}>1 + 1 = 2</span>
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    1 : the original number
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    + : The sign of addition
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    1 : What number I want to increase with.
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    The following reads: One plus one equals two.
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}} >
                    <u>
                        We can go further than just one. 
                    </u>                    
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"orange"}}>
                    Like this: 2 + 6
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition2.png")}  alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"orange"}}>
                    This way we ended up on 8.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    You can try it with your fingers if you want to.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " src={require("../assets/Addition4.png")}  alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                    You mean like this: 1 + 3 + 4?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  src={require("../assets/Addition5.png")} alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                    Well, let's split it into two parts. We have the + sign two times, we are going to "jump" two times as well.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    For the first time with <span style={{color:"orange"}}>3</span> and the seconf time with <span style={{color:"orange"}}>4</span>.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    But with the second time we start where the first left of.
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition3.png")}  alt="Image goes here." />
                </div>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Our answer will be <span style={{color:"green"}}>8</span> then. <span style={{color:"orange"}}>1 + 3 + 4 = 8</span>.
                 </p>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    if you can't solve it for the first time, don't panic, you can split it to two parts, Like this:
                 </p>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    I know that <span style={{color:"orange"}}> 1 + 3 = 4 </span>, this = let's me know I can replace the <span style={{color:"orange"}}> 1 + 3</span>
                 </p>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    So I can do this: <span style={{color:"orange"}}>1 + 3 + 4 = 4 + 4</span> 
                 </p>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    <u>
                        I did the same I just marked the first "jump" with numbers.
                    </u>
                 </p>
                 <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Now we can finish it. <span style={{color:"orange"}}> 4 + 4 = 8</span>
                 </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  src={require("../assets/Addition6.png")} alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    You just do more "jumps". For example:
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"orange"}}>
                    1 + 3 + 2 + 4
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    You do the same: <span>1 + 3</span> + 2 + 4 = 4 + 2 + 4
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Then <span style={{color:"orange"}}>4 + 2</span> + 4 = <span style={{color:"orange"}}>6</span>  + 4
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    Finally 6 + 4 = 10
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    If are confident enought later you can do things like this:
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    1 + <span style={{color:"orange"}}>3 + 2 + 4</span> = 1 + <span style={{color:"orange"}}>9</span>
                </p>
                 <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default AdditionPage();