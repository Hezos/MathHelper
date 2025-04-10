import { Advertisement } from "./Advertisement";

export function MultiplicationPage(){

    return ( 
        <div>
        <h1> Choosen topic: Multiplication </h1>
        <p> It is recommended to review addition first before starting this topic. </p>
        <p> Let's suppose you have to add six twos together like this: </p>
        <br></br>
        <p> 2 + 2 + 2 + 2 + 2 + 2 = 12 </p>
        <p>Image goes here</p>
        <p>
            That's why multiplication was created for.
        </p>
        <p>
            We have a total of six twos, so to simplify the calculation above we can replace it with the following:
        </p>
        <br></br>
        <p> 6 &#8729; 2 = 12</p>
        <p>Image goes here</p>
        <p>
            6 : We have six amount of twos
        </p>
        <p>
            &#8729; : The dot represents multiplication
        </p>
        <p>
            2 : representing the number we want to multiply
        </p>
        <p>
            The operation reads six times two.
        </p>
        <p>
            So the result of the two operations will be the same. They are equal to each other.
        </p>
        <p> 6 &#8729; 2 = 2 + 2 + 2 + 2 + 2 + 2 </p>
        <p>
            We can replace the original number if we want to calculate something else. For example three times five would look like this:
        </p>
        <p>3 &#8729; 5 = 15</p>
        <p>Ofcourse different numbers means different result. Hence the the result if fifteen.</p>
        <p>
            Multiplication is commutative, so 2 &#8729; 6 is equal to 6 &#8729; 2, the result of the calculations are both 12.
        </p>
        <p>
            Image goes here
        </p>
        <p>
            Image goes here
        </p>
        <a href="http://localhost:3000">Further explaination in a youtube video</a>
        <Advertisement/>
    </div>

    );
}

export default MultiplicationPage();