import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{fontFamily:"sans-serif"}}>
          <div>
          <button class="btn info"  onClick={handleShow}>
        Topics
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{fontFamily:"sans-serif"}}>
                  Learn math with my sidekick!
                </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body class="container">
              <div>
                <div>
                  <a class="btn info" href='/Numberline' style={{fontFamily:"sans-serif"}}>
                    Number line
                  </a>
                </div>
                <div>
                   <a class="btn info" href='/Addition' style={{fontFamily:"sans-serif"}}>
                     Addition
                  </a> 
                </div>
                <div>
                  <a class="btn info" href='/Substraction' style={{fontFamily:"sans-serif"}}> 
                    Substraction
                  </a>
                </div>
                <div>
                  <a class="btn info" href='/Multiplication' style={{fontFamily:"sans-serif"}}>
                   Multiplication 
                  </a>
                </div>
                <div>    
                  <a href='/Division' class="btn info" style={{fontFamily:"sans-serif"}}> 
                     Division
                  </a>
                </div>
                 <div>
                  <a href='/Variable' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Variables
                  </a>
                </div>
                <div>
                  <a href='/Exponentiation' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Exponentiation
                  </a>
                </div>
                <div>
                  <a href='/Factorial' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Factorials 
                  </a>
                </div>
                <div>
                  <a href='/Fraction' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Fractions
                  </a> 
                </div>
                <div>
                  <a href='/Squareroot' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Squareroot
                  </a> 
                </div>
                <div>
                  <a href='/Equations' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Equations
                  </a>
                </div>
                <div>
                  <a href='/Areacalculation' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Area calculation
                  </a>
                </div>
                <div>
                  <a href='/GeometricFigures' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Geometric figures
                  </a>
                </div>
                <div>
                  <a href='/Series' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Series
                  </a>
                </div>
                <div>
                  <a href='/Percentage' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Percentage
                  </a>
                </div>
                <div>
                  <a href='/Surfacevolumecalculations' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Surface and volume calculations
                  </a>
                </div>
                <div>
                  <a href='/Coordinatesystem' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Coordinate system
                  </a>
                </div>
                <div>
                  <a href='/Charts' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Charts
                  </a>
                </div>
                <div>
                  <a href='/Functions' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Functions
                  </a>
                </div>
                <div>
                  <a href='/SineCosine' class="btn info" style={{fontFamily:"sans-serif"}}>
                    Sine, Cosine
                  </a> 
                </div>
                <div>
                  <a href='/Logarithms' class="btn info" style={{fontFamily:"sans-serif"}}>
                   Logarithms
                  </a>
                </div>
                
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="btn info" href="http://localhost:3000" style={{fontFamily:"sans-serif"}}>
                Home
              </a>
            </li>
          </ul>
          <div class="text-end w-100">
            <a class="btn info" href="http://localhost:3000" style={{fontFamily:"sans-serif"}}>YouTube</a>
          </div>
          </div>
        </nav>
    </div>
  );
}

export default NavMenu;