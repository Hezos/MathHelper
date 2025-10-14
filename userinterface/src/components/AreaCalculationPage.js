import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";
//import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"

export function AreacalculationPage(){
    return(
        <div>
                <NavMenu/>
                <div class="container" >
                    <div >
                    <br></br>
                    <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Area calculation </p>
                    </div>
                    <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                        It is recommended to review equations first, before starting this topic.
                    </p>
                    <br></br>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Let's suppose you want to scrubble your classmate's table.
                    </p>
                    <br></br>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        You'd probably use a pen to leave a mark. You are interested in the table's area.
                    </p>
                    <br></br>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        You can calculate it the following way:
                    </p>
                     <div class="text-center">
                        <img class="w-100 h-100" alt="Image goes here." />
                    </div>
                    <br></br>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        When you are drawing the lines you can count how many lines did you need to cover the whole table.
                        You get the area the like this:
                    </p>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        Area = line's length &#8729; line's count
                    </p>
                     <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        This way you get a brick.
                    </p>
                    <br></br>
                     <div class="text-center">
                        <img class="w-100 h-100" alt="Image goes here." />
                    </div>
                    <br></br>
                     <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        Okay let me change them!
                    </p>
                     <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Let's shorten the area simply to <span class="h4 border border-primary border-4 border-info">A</span>.
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        The line's length to the letter a.
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        The lines' count to the letter b.
                    </p>
                    <br></br>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Then we get the following equation:
                    </p>
                    <br></br>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        A = a &#8729; b
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Both <u>a</u> and <u>b</u> can be length.
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        So a 5m wide and 4m tall brick's area can be calculated as follows: you can substitute the width (5m) to the letter a and the height (4m) to the letter b.
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        After that you get the following:
                    </p>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        A = 5m &#8729; 4m
                    </p>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        A = 20m<sup>2</sup>
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        The measurement is m<sup>2</sup>, because m &#8729; m is m<sup>2</sup>.
                    </p>
                     <div class="text-center">
                        <img class="w-100 h-100" alt="Image goes here." />
                    </div>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Okay, let's look at a square! 
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        A square's every side is equally long, so the b side is as long as the a side.  
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        If we express them with variables:
                    </p>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        So the square's area will be:
                    </p>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        A = a &#8729; a
                    </p>
                    <p class="h4 text-center" style={{fontFamily:"sans-serif"}}>
                        Which is: A = a<sup>2</sup>
                    </p>
                     <div class="text-center">
                        <img class="w-100 h-100" alt="Image goes here." />
                    </div>
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        Yes, there are.
                    </p> 
                    <p class="h4" style={{fontFamily:"sans-serif"}}>
                        But we'll look at them later.
                    </p> 
                    <br></br>
                    <a href="http://localhost:3000">Further explaination in a youtube video</a>
                    <Advertisement/>
                </div>
        </div>
    );
}

export default AreacalculationPage();