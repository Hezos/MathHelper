import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";



export function FractionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                     <br></br>
                     <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Fractions </p>
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    It is recommended to review division first, before starting this topic.
                </p>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    You may have noticed, that sometimes you can see broken things.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Things which are naturally in one whole piece, but they've broken, or we can say fractured to two or even more parts.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions1.png")} alt="Image goes here." />
                </div>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Yes, well you can't break them physically, but you can represent the process.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions2.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    You already know the answer, it's division.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Well, let's try it!
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    What if we divide 1?
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    <u>
                        Let's illustrate it with a rectangle!
                    </u>
                </p>
                <br></br>
                <div class="text-center">
                    <img class="w-25 h-25" src={require("../assets/Fractions3.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    When I broke this rectangle with a line I've got two halfs. I divided it by two. 
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    But for fractions we use a different symbol.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    Like this: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span>
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"purple"}}>
                    It is still the same operation so <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>1</span>
                            <span style={{borderTop:"1px solid"}}>2</span>
                        </span> = 1 : 2
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    We have the halfs of a rectangle, with this logic we can fracture a line too.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"blue"}}>
                    Using this discovery we can adapt it into the number like this:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions4.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6 border border-primary border-4 border-info" style={{fontFamily:"sans-serif"}}>
                    We broke that segment between 0 and 1, because we have more rectangles than nothing, but less than 1, a whole piece,  We mark it halfway because we have halfs.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Now, what's the actual value?
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    We take our magic number 10. The half of 10 is 5.
                </p> 
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions5.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    That's why we mark, that we have zero whole parts first.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    0
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    Then we place a . so we can write the rest.
                </p>
                <p class="text-center h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    0.5
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                    The answer reads zero point five.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"green"}}>
                    This marks we have 0.5 rectangles if we use numbers.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    We can use different numbers ofcourse.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    We can divide by four:
                </p>
                <br></br>
                <div class="text-center">
                    <img class="w-25 h-25" src={require("../assets/Fractions6.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    In this case it will be: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>2</span>
                            <span style={{borderTop:"1px solid"}}>4</span>
                        </span> because I divided by 4 but I took 2 parts from the four original, marked by the coloring.
                </p>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    Even with eight:
                </p>
                <br></br>
                <div class="text-center">
                    <img class="w-25 h-25" src={require("../assets/Fractions7.png")} alt="Image goes here." />
                </div>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    In this case it will be: <span style={{display:"inline-flex",  flexDirection: "column", verticalAlign: "middle"}}>
                        <span>4</span>
                            <span style={{borderTop:"1px solid"}}>8</span>
                        </span> because I divided by 8, I took 4 parts from the four original, marked by the coloring.
                </p>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    Notice that if I color more parts of the rectangles they look like when we divided it with 2. 
                </p>
                <br></br>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions8.png")} alt="Image goes here." />
                </div>
                <br></br>
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
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
                <p class="text-start h6 display-6" style={{fontFamily:"sans-serif", color:"yellow"}}>
                    The same is true backwards:
                </p>
                <div class="text-center">
                    <img class="w-50 h-50" src={require("../assets/Fractions9.png")} alt="Image goes here." />
                </div>
                
                <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default FractionPage();