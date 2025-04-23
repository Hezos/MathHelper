import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";



export function FractionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                     <br></br>
                     <p class="text-start h1 display-1 text-center"> Choosen topic: Fractions </p>
                </div>
                <p>
                    It is recommended to review division first, before starting this topic.
                </p>
                <p>
                    You may have noticed, that sometimes you can see broken things.
                </p>
                <p>
                    Things which are naturally in one whole piece, but they've broken, or we can say fractured to two or even more parts.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    Yes, well you can't break them physically, but you can represent the process.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    You already know the answer, it's division.
                </p>
                <p>
                    Well, let's try it!
                </p>
                <p>
                    What if we divide 1?
                </p>
                <p>
                    Let's illustrate it with a rectangle!
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    When I broke this rectangle with a line I've got two halfs. I divided it by two. 
                </p>
                <p>
                    But for fractions we use a different symbol.
                </p>
                <p>
                    Like this: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span>
                </p>
                <p>
                    It is still the same operation so <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> = 1 : 2
                </p>
                <p>
                    We have the halfs of a rectangle, with this logic we can fracture a line too.
                </p>
                <p>
                    Using this discovery we can adapt it into the number like this:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    We broke taht segment between 0 and 1, because we have more rectangles than nothing, but less than 1, a whole piece,
                </p>
                <p>
                    We mark it halfway because we have halfs.
                </p>
                <p>
                    Now, what's the actual value?
                </p>
                <p>
                    We take our magic number 10. The half of 10 is 5.
                </p> 
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    That's why we mark, that we have zero whole parts first.
                </p>
                <p>
                    0
                </p>
                <p>
                    Then we place a . so we can write the rest.
                </p>
                <p>
                    0.5
                </p>
                <p>
                    The answer reads zero point five.
                </p>
                <p>
                    This marks we have 0.5 rectangles if we use numbers.
                </p>
                <p>
                    We can use different numbers ofcourse.
                </p>
                <p>
                    We can divide by four:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    In this case it will be: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>2</span>
                            <span style={{borderTop:"1px solid"}}>4</span>
                        </span> because I divided by 4 but I took 2 parts from the four original, marked by the coloring.
                </p>
                <br></br>
                <p>
                    Even with eight:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    In this case it will be: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>4</span>
                            <span style={{borderTop:"1px solid"}}>8</span>
                        </span> because I divided by 8, I took 4 parts from the four original, marked by the coloring.
                </p>
                <p>
                    Notice that if I color more parts of the rectangles they look like when we divided it with 2, 
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                <p>
                    So we can write: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> = <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>2</span>
                            <span style={{borderTop:"1px solid"}}>4</span>
                        </span> = <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>4</span>
                            <span style={{borderTop:"1px solid"}}>8</span>
                        </span>
                </p>
                <p>
                    The same is true backwards:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " alt="Image goes here." />
                </div>
                
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default FractionPage();