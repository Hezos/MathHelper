import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function VariablePage(){
    return(
        <div>
            <NavMenu/>
            <div class="container">
                <div >
                    <br></br>
                    <p class=" h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Variables </p>
            </div>
            <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                It is recommended to review multiplication and division first, before starting this topic.
            </p>
            <br></br>
            <p class="text-start h4 " style={{fontFamily:"sans-serif"}}>
                Variables are used to <span style={{color:"orange"}}>mark numbers</span> that we may or may not know the value of.
            </p>
            <p class="text-start h4" style={{fontFamily:"sans-serif", color:"blue"}}>
                They are usually represented with a selected letter.
            </p>
            <div class="text-center">
                    <img class="w-50 h-50"  src={require("../assets/Variables1.png")} alt="Image goes here." />
            </div>
             <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                Well when you have situations like that, it's usually the question's answer is to find that.
             </p>
             <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                We will look at those situations later in the equations topic.
             </p>
             <p class="text-start h4  border border-primary border-4 border-info" style={{fontFamily:"sans-serif"}}>
                But for now we discuss the situation where the variables true value is present.
             </p>
             <p class="text-start h4" style={{fontFamily:"sans-serif", color:"purple"}}>
                Let's look at this example:
             </p>
             <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                If <span style={{color:"orange"}}>a = 1</span> what is the value of <span style={{color:"orange"}}>a + 2</span>?
             </p>
             <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                We can take the value of a which is 1 according to the = sign and replace it in the question's problem.
             </p>
             <p class="text-center h4" style={{fontFamily:"sans-serif"}}>
                a + 2 = 1 + 2 = 3
             </p>
             <p class="text-center h4" style={{color:"green",fontFamily:"sans-serif"}}>
                Our final answer is 3.
             </p>
             <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Variables2.png")} alt="Image goes here." />
            </div>
           <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                Yes, it is. remember, when you know the value of a Variable you can replace the Variable with the associated number.
            </p>  
            <br></br>
            <a href="http://localhost:3000">Further explaination in a youtube video</a>
            <Advertisement/>
             </div>       
        </div>
    );
}


export default VariablePage();