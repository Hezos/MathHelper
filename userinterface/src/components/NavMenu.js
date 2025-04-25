import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
          <button class="btn info"  onClick={handleShow}>
        Topics
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
                  Learn math with my sidekick!
                </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body class="container">
              <div>
                <div>
                  <a class="btn info" href='/Numberline'>
                    Number line
                  </a>
                </div>
                <div>
                   <a class="btn info" href='/Addition'>
                     Addition
                  </a> 
                </div>
                <div>
                  <a class="btn info" href='/Substraction'> 
                    Substraction
                  </a>
                </div>
                <div>
                  <a class="btn info" href='/Multiplication'>
                   Multiplication 
                  </a>
                </div>
                <div>    
                  <a href='/Division' class="btn info"> 
                     Division
                  </a>
                </div>
                 <div>
                  <a href='/Variable' class="btn info">
                    Variables
                  </a>
                </div>
                <div>
                  <a href='/Exponentiation' class="btn info" >
                    Exponentiation
                  </a>
                </div>
                <div>
                  <a href='/Factorial' class="btn info" >
                    Factorials 
                  </a>
                </div>
                <div>
                  <a href='/Fraction' class="btn info" >
                    Fractions
                  </a> 
                </div>
                <div>
                  <a href='/Squareroot' class="btn info" >
                    Squareroot
                  </a> 
                </div>
                <div>
                  <a href='/Equations' class="btn info" >
                    Equations
                  </a>
                </div>
                <div>
                  <a href='/Areacalculation' class="btn info">
                   Area calculation
                  </a>
                </div>
                <div>
                  <a href='/Series' class="btn info" >
                    Series
                  </a>
                </div>
                <div>
                  <a href='/Percentage' class="btn info">
                    Percentage
                  </a>
                </div>
                <div>
                  <a href='/Surfacevolumecalculations' class="btn info">
                   Surface and volume calculations
                  </a>
                </div>
                <div>
                  <a href='/Coordinatesystem' class="btn info">
                   Coordinate system
                  </a>
                </div>
                <div>
                  <a href='/Charts' class="btn info">
                    Charts
                  </a>
                </div>
                <div>
                  <a href='/Functions' class="btn info">
                   Functions
                  </a>
                </div>
                <div>
                  <a href='/SineCosine' class="btn info">
                    Sine, Cosine
                  </a> 
                </div>
                <div>
                  <a href='/Logarithms' class="btn info">
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
              <a class="btn info" href="http://localhost:3000" >
                Home
              </a>
            </li>
          </ul>
          <div class="text-end w-100">
            <a class="btn info" href="http://localhost:3000">YouTube</a>
          </div>
          </div>
        </nav>
    </div>
  );
}

export default NavMenu;