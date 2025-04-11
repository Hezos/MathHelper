import { Advertisement } from "./Advertisement";


export function MultiplicationPage(){

    return ( 
        <div>
        <p class="text-start h1 display-1"> Choosen topic: Multiplication </p>
        <p class="text-start h6 display-6"> It is recommended to review addition first before starting this topic. </p>
        <br></br>
        <p class="text-start h5 display-5"> Let's suppose you have to add six twos together like this: </p>
        <br></br>
        <p class="text-center h4 display-4"> 2 + 2 + 2 + 2 + 2 + 2 = 12 </p>
        <img class="w-50 h-50"
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult1.png")} alt="Image goes here." />
        <p class="text-start h5 display-5">
            That's why multiplication was created for.
        </p>
        <p class="text-start h6 display-6">
            We have a total of six twos, so to simplify the calculation above we can replace it with the following:
        </p>
        <br></br>
        <p class="text-center h4 display-4"> 6 &#8729; 2 = 12</p>
        <p class="text-start h6 display-6">
            6 : We have six amount of twos
        </p>
        <p class="text-start h6 display-6">
            &#8729; : The dot represents multiplication
        </p>
        <p class="text-start h6 display-6">
            2 : representing the number we want to multiply
        </p>
        <br></br>
        <p class="text-start h6 display-6">
            The operation reads six times two.
        </p>
        <img class="w-50 h-50"
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult2.png")} alt="Image goes here." />
        <br></br>
        <p class="text-start h6 display-6">
            So the result of the two operations will be the same. They are equal to each other.
        </p >
        <br></br>
        <p class="text-center h5 display-5"> 6 &#8729; 2 = 2 + 2 + 2 + 2 + 2 + 2 </p>
        <br></br>
        <p class="text-start h6 display-6">
            We can replace the original number if we want to calculate something else. For example three times five would look like this:
        </p>
        <p class="text-center h5 display-5" >3 &#8729; 5 = 15</p>
        <br></br>
        <p class="text-start h6 display-6">Ofcourse different numbers means different result. Hence the the result is fifteen.</p>
        <br></br>
        <p class="text-start h6 display-6">
            Multiplication is commutative, so 2 &#8729; 6 is equal to 6 &#8729; 2, the result of the calculations are both 12.
        </p>
        <img class="w-50 h-50 text-center"
         src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mul4.png")} alt="Image goes here." />
         <br></br>
        <img class="w-50 h-50 text-center"
        src={require("file:///media/kubuntu/QuestionMark/Projects/MathHelper/userinterface/src/components/Mult3.png")} alt="Image goes here." />
        <br></br>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
    </div>

    );
}

export default MultiplicationPage();