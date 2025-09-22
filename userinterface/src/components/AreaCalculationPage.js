import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";
//import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"

export function AreacalculationPage(){
    return(
        <div>
                <NavMenu/>
                <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                    <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="h1 display-1 text-center" style={{fontFamily:"sans-serif"}}> Choosen topic: Area calculation </p>
                    </div>
                    <p class="text-start h6 display-6" style={{fontFamily:"sans-serif"}}>
                        It is recommended to review variables and fractions first, before starting this topic.
                    </p>
                    <br></br>
                    
                <p class="h6 display-6" style={{fontFamily:"sans-serif"}}>
                    Let's suppose we want to calculate how much area does one of our walls reserve in the room.
                </p>
                    <br></br>
                    <a href="http://localhost:3000">Further explaination in a youtube video</a>
                    <Advertisement/>
                </div>
        </div>
    );
}

export default AreacalculationPage();