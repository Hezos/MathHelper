import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";



export function SubstractionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container" >
                <div>
                    <br></br>
                    <p class="text-start h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Substraction </p>
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    It is recommended to review number line first, before starting this topic.
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Let's see the following problem: <span style={{color:"orange"}}>5 - 3</span>, I will illustrate that on the number line.
                </p>
                <div class="text-center">
                    <img class="w-100 h-100 " src={require("../assets/Substraction1.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    We start from <span style={{color:"orange"}}>5</span> and we go left with <span style={{color:"orange"}}>3</span> steps. We ended up on <span style={{color:"orange"}}>2</span>.
                </p>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    With numbers: <span style={{color:"orange"}}>5 - 3 = 2</span>
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Let's see the following:
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif",color:"green"}}>
                    5 - 3
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif",color:"green"}}>
                    5 : The number which we want to decrease
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif",color:"green"}}>
                    - : the symbol of substraction
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif",color:"green"}}>
                    3 : The number we want to decrease with
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Alongside with the result: <span style={{color:"orange"}}>5 - 3 = 2</span>.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    The following reads five minus three equals two.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " src={require("../assets/Substraction2.png")} alt="Image goes here." />
                </div>
                <p class="text-start h4" style={{fontFamily:"sans-serif",color:"purple"}}>
                    Okay let's look at this one: 4 - 1 - 2
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    We can split this example into two parts.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    We have two minus signs, that means we will go left  <u>twice</u>.
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif",color:"green"}}>
                    The second time we go where the first one left off.
                </p>
                <div class="text-center">
                    <img class="w-100 h-100 " src={require("../assets/Substraction3.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Using the number line we can write the following:
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    If we look at <span style={{color:"orange"}}>4 - 1 = 3 </span>, that tells us, that <span style={{color:"orange"}}>4 - 1</span> is replacable with <span style={{color:"orange"}}>3</span>, that's what we are going to do.
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif", color:"orange"}}>
                    4 - 1 - 2 = 3 - 2
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    And finally, <span style={{color:"orange"}}>3 - 2 = 1</span>, we got what the number line showed us.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Substraction4.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                    Alright let's see this: <span style={{color:"orange"}}>8 - 2 - 1 - 3</span>
                </p>
                <p class="text-start h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                    Well we just substract more times like this:
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                <span style={{color:"orange"}}>8 - 2</span> -1 -3 = <span style={{color:"orange"}}>6</span> - 1 - 3
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                <span style={{color:"orange"}}>6 - 1</span> -3 = <span style={{color:"orange"}}>5</span> - 3
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif", color:"green"}}>
                    5 - 3 = 2
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                    If you are familiar with addition you can substract the sum of these numbers.
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    2 + 1 + 3 = 6
                </p>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    8 - 6 = 2, We have the same result.
                </p>
                <br></br>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    Why does this work?
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Substraction5.png")} alt="Image goes here." />
                </div>
                <br></br>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Substraction6.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                    <u>
                        We make one big "jump" to the left instead of three small ones.
                    </u>
                </p>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>   
            </div>
        </div>
    );
}

export default SubstractionPage();