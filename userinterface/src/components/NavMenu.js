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
                <button class="btn info" onClick={()=>{
                         
                  }}>
                    Equations
                  </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    }}>
                      Area, Volume calculations
                    </button>
                </div>
                <div>
                  <button class="btn info"  onClick={()=>{
                    }}>
                      Calculate fractions
                    </button>
                </div>
                <div>
                  <a class="btn info" href='/Multiplication' >
                      Multiplication
                    </a>
                </div>
                 <div>
                  <a class="btn info" href='/Division' >
                      Division
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