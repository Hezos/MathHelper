import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function VariablePage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Addition </p>
            </div>
            <p>
                It is recommended to review multiplication and division first, before starting this topic.
            </p>
            <p>
                Variables are used to mark numbers that we may or may not know the value of.
            </p>
            <p>
                They are usually represented with a selected letter.
            </p>
            <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
            </div>
             <p>
                Well when you have situations like that is usually the question's answer is to find that.
             </p>
             <p>
                We will look at those situations later in the equations topic.
             </p>
             <p>
                But for now we discuss the situation where the variables true value is present.
             </p>
             <p>
                Let's look at this example:
             </p>
             <p>
                If a = 1 what is the value of a + 2?
             </p>
             <p>
                We can take the value of a which is 1 according to the = sign and replace it in the question's problem.
             </p>
             <p>
                a + 2 = 1 + 2 = 3
             </p>
             <p>
                Our final answer is 3.
             </p>
             <div class="text-center">
                    <img class="w-50 h-50 "  alt="Image goes here." />
            </div>
           <p>
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