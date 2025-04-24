import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";


export function NumberLinePage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                <br></br>
                <p class="text-start h1 display-1 text-center"> Choosen topic: Number line </p>
                </div>
                <br></br>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/NumberLine.png")} alt="Image goes here." />
                </div>
                <p>
                    We measure a lot of things using numbers.
                </p>
                <p>
                    For example when your parents or doctors measure your height, or your score when you play games.
                </p>
                <p>
                    The number line is a tool to help visualize these measurements.
                </p>
                <p>
                    When we first look at the number line we can see it is a straight line. 
                </p>
                <p>
                    I would like to divide it to three parts, using the following pieces:
                </p>
                <p>
                    Left, right, center
                </p>
                <p>
                    I would like to start with the right.
                </p>
                <p>
                    The further the number on the line the higher.
                </p>
                <p>
                    If you start counting with your fingers you can notice, that the longer you go, the more fingers you require after each number.
                </p>
                <p>
                    Note, when you reach 10 you can tell, that you "ran out of fingers" to count further.
                </p>
                <p>
                    This 10 will be our first magic number.
                </p>
                <p>
                    You have to pause a bit when you reach 10.
                </p>
                <p>
                    This magic number has two parts.
                </p>
                <p>
                    If we want to go further we have to change one part. Let's change the second part, marked with this symbol 0. 
                    I will talk about this symbol later. 
                </p>
                <p>
                    If you look closely when we go further from the symbol 0, the next is 1 on the line. So when we count further we replace the 0 with 1.
                </p>
                <p>
                    This way we get the following number: 11, the next will be 12, and so on, like we did before.
                </p>
                <p>
                    We do that untill we reach 19.
                </p>
                <p>
                    When we get the we <span> don't write </span> 110, that's a different number.
                </p>
                <p>
                    We write 20. Implicating you have to use the first part, not where the 0 was originally.
                </p>
                <p>
                    The 20 would mean you've gone on two circles with your fingers, 110 would mean 11 circles.
                </p>
                <p>
                    Now for the middle part the symbol 0:
                </p>
                <p>
                    Written like zero, means the absent of everything, in other words we have nothing. Here's an illustration:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " src={require("../assets/NumberLine3.png")} alt="Image goes here." />
                </div>
                <p>
                    If tatu would like to stand there he would fall down, because there isn't anything there to keep him in the air.
                </p>
                <p>
                    In fact he tried to stand there, but you can see he regreted it immediatly.
                </p>
                <p>
                    Finally the left side.
                </p>
                <p>
                    The left is for negative numbers.
                </p>
                <p>
                    The so called negative numbers are the opposite of the numbers on the right.
                </p>
                <p>
                    They act differently.
                </p>
                <p>
                    Hence the further you go on the left the lower the number you get.
                </p>
                <p>
                    We mark these numbers with a <span>-</span> sign. for example -2 -1 -5.
                </p>
                <p>
                    As you can see on the number line negative numbers start on the left and go for the left.
                </p>
                <div class="text-center">
                    <img class="w-25 h-25 " src={require("../assets/NumberLine2.png")} alt="Image goes here." />
                </div>
                 <p>
                    in the case of negative numbers, it's like this flipping here.
                 </p>
                <br></br>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default NumberLinePage();