import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";
//import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"


export function NumberLinePage(){
    return(
        <div>
            <NavMenu/>
            <div class="container ">
                <div>
                <br></br>
                <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Number line </p>
                </div>
                <br></br>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/NumberLine.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    We measure a lot of things using numbers. 
                </p>
                <br>
                </br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    For example when your parents or doctors measure your height, or your score when you play games.
                </p>
                <br>
                </br>
                <p class="h5 display-5 border border-primary border-4 border-info" style={{fontFamily:"sans-serif"}}>
                    The number line is a tool to help visualize these measurements.
                </p>
                <br></br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    When we first look at the number line we can see it is a straight line. I would like to divide it to three parts, using the following pieces:
                </p>
                <p class="h6 display-6">
                    <span style={{color:"red"}}>Left,</span>  <span style={{color:"green"}}>right,</span> <span style={{color:"blue"}}>center</span> 
                </p>
                <br></br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Let's start with the right:
                    </u>
                </p>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    The further the number on the line the higher. If you start counting with your fingers you can notice, that the longer you go, the more fingers you require after each number.
                </p>
                <p class="h6 display-6 font-weight-bold" style={{fontFamily:"sans-serif"}}>
                    Note, when you reach <span style={{color:"orange"}}>10</span> you can tell, that you "ran out of fingers" to count further.
                </p>
                <p class="h6 display-6" style={{color:"green", fontFamily:"sans-serif"}}>
                    This 10 will be our first magic number. You have to pause a bit when you reach 10. This magic number has two parts.
                </p>
                <p class="h6 display-6 text-justify" style={{fontFamily:"sans-serif"}}>
                    If we want to go further we have to change one part. Let's change the second part, marked with this symbol <span style={{color:"orange"}}>0</span>. I will talk about this symbol later. If you look closely when we go further from the symbol <span style={{color:"orange"}}>0</span>, the next is <span style={{color:"orange"}}>1</span> on the line. So when we count further we replace the <span style={{color:"orange"}}>0</span> with <span style={{color:"orange"}}>1</span>. This way we get the following number: <span style={{color:"orange"}}>11</span>, the next will be <span style={{color:"orange"}}>12</span>, and so on, like we did before. We do that untill we reach <span style={{color:"orange"}}>19</span>.
                </p>
                <p class="h6 display-6 text-justify border border-primary border-4 border-info" style={{fontFamily:"sans-serif"}}>
                    When we get the we <span style={{color:"red"}}> don't write </span> 110, that's a different number. We write <span style={{color:"orange"}}>20</span>. Implicating you have to use the first part, not where the <span style={{color:"orange"}}>0</span> was originally. The <span style={{color:"orange"}}>20</span> would mean you've gone on two circles with your fingers, 110 would mean <span style={{color:"orange"}}>11</span> circles.
                </p>
                <br></br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Now for the middle part the symbol 0:
                    </u>
                </p>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Written like zero, means the absent of everything, in other words we have nothing. Here's an illustration:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " src={require("../assets/NumberLine3.png")} alt="Image goes here." />
                </div>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    If Tatu would like to stand there he would fall down, because there isn't anything there to keep him in the air. In fact he tried to stand there, but you can see he regreted it immediatly.
                </p>
                <br></br>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Finally the left side.
                    </u>
                </p>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    The left is for negative numbers. The so called negative numbers are the opposite of the numbers on the right. They act differently.
                </p>
                <p class="h6 display-6" style={{color:"green", fontFamily:"sans-serif"}}>
                    Hence the further you go on the left the lower the number you get.
                </p>
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    We mark these numbers with a <span class="h6 display-6 border border-primary border-4 border-info">-</span> sign. for example <span style={{color:"orange"}}>-2 -1 -5</span> . As you can see on the number line negative numbers start on the left and go for the left.
                </p>
                <div class="text-center">
                    <img class="w-25 h-25 " src={require("../assets/NumberLine2.png")} alt="Image goes here." />
                </div>
                 <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    In the case of negative numbers, it's like this flipping here.
                 </p>
                <br></br>
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default NumberLinePage();