import { Advertisement } from "./Advertisement";
import NavMenu from "./NavMenu";





export function AdditionPage(){
    return(
        <div>
            <NavMenu/>
            <div class="container border border-primary border-3 rounded-4 " style={{background:"darkgray"}}>
                <div class="border-bottom border-5 border-primary">
                    <br></br>
                    <p class="text-start h1 display-1 text-center"> Choosen topic: Addition </p>
                </div>
                <p>
                    It is recommended to review number line first, before starting this topic.
                </p>
                <p>
                    If you remember when we learnt the number line, if we went further on the right side we've got higher and higher numbers.
                </p>
                <p>
                    Now addition shows how many steps we take to the right, for example:
                </p>
                <p>
                    If I write 1 + 1, that means I go to 1 and I go right 1 time.
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition1.png")}  alt="Image goes here." />
                </div>
                <p>
                    We end up on 2, that means I increased 1 with 1, it went 1 higher.
                </p>
                <p>
                    So we can say 1 + 1 = 2
                </p>
                <p>
                    1 : the original number
                </p>
                <p>
                    + : The sign of addition
                </p>
                <p>
                    1 : What number I want ti increase with.
                </p>
                <p>
                    The following reads: One plus one equals two.
                </p>
                <p>
                    We can go further than just one. Like this: 2 + 6
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition2.png")}  alt="Image goes here." />
                </div>
                <p>
                    This way we ended up on 8.
                </p>
                <p>
                    You can try it with your fingers if you want to.
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 " src={require("../assets/Addition4.png")}  alt="Image goes here." />
                </div>
                <p>
                    You mean like this: 1 + 3 + 4?
                </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  src={require("../assets/Addition5.png")} alt="Image goes here." />
                </div>
                <p>
                    Well, let's split it into two parts. We have the + sign two times, we are going to "jump" two times as well.
                </p>
                <p>
                    For the first time with 3 and the seconf time with 4.
                </p>
                <p>
                    But with the second time we start where the first left of.
                </p>
                <div class="text-center">
                    <img class="w-100 h-100" src={require("../assets/Addition3.png")}  alt="Image goes here." />
                </div>
                 <p>
                    Our answer will be 8 then. 1 + 3 + 4 = 8.
                 </p>
                 <p>
                    if you can't solve it for the first time, don't panic, you can split it to two parts, Like this:
                 </p>
                 <p>
                    I know that 1 + 3 = 4, this = let's me know I can replace the 1 + 3
                 </p>
                 <p>
                    So I can do this: 1 + 3 + 4 = 4 + 4
                 </p>
                 <p>
                    I did the same I just marked the first jump with numbers.
                 </p>
                 <p>
                    Now we can finish it. 4 + 4 = 8
                 </p>
                <div class="text-center">
                    <img class="w-50 h-50 "  src={require("../assets/Addition6.png")} alt="Image goes here." />
                </div>
                <p>
                    You just do more jumps. For example:
                </p>
                <p>
                    1 + 3 + 2 + 4
                </p>
                <p>
                    You do the same: <span>1 + 3</span> + 2 + 4 = 4 + 2 + 4
                </p>
                <p>
                    Then <span>4 + 2</span> + 4 = 6 + 4
                </p>
                <p>
                    Finally 6 + 4 = 10
                </p>
                <p>
                    If are confident enought later you can do things like this:
                </p>
                <p>
                    1 + <span>3 + 2 + 4</span> = 1 + 9
                </p>
                 <a href="http://localhost:3000">Further explaination in a youtube video</a>
                <Advertisement/>
            </div>
        </div>
    );
}

export default AdditionPage();